from rest_framework.pagination import PageNumberPagination
from .filters import BookFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Book, ReadingHistory
from .serializers import BookSerializer, ReadingHistorySerializer
import requests
from rest_framework import filters
from django.http import HttpResponse

class BookListCreateView(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    pagination_class = PageNumberPagination
    filter_backends = [DjangoFilterBackend,filters.SearchFilter]
    filterset_class = BookFilter
    search_fields = ['book_title', 'book_authors', 'book_genres']


class BookRetrieveUpdateView(generics.RetrieveUpdateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def get_object(self):
        book_id = self.kwargs['pk']
        return generics.get_object_or_404(Book, book_id=book_id)

    def get(self, request, *args, **kwargs):
        book = self.get_object()
        book_id = book.book_id
        url = f'https://gutenberg.org/cache/epub/{book_id}/pg{book_id}-images.html.utf8'
        response = requests.get(url)


        if response.status_code == 200:
            html_content = response.text
        else:
            return Response({'error': 'Failed to download HTML page'}, status=response.status_code)

        edited_html = html_content.replace(f'src="', f'src="https://gutenberg.org/cache/epub/{book_id}/')  # Replace 'Old Text' with 'New Text'

        return HttpResponse(edited_html, content_type='text/html')


class ReadingHistoryListCreateView(generics.ListCreateAPIView):
    serializer_class = ReadingHistorySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return ReadingHistory.objects.filter(user=user)

    def create(self, request, *args, **kwargs):
        book_id = request.data.get('book_id')
        progress = request.data.get('progress')
        user = request.user

        try:
            book = Book.objects.get(pk=book_id)
        except Book.DoesNotExist:
            return Response({'error': 'Book not found'}, status=status.HTTP_404_NOT_FOUND)

        reading_history, created = ReadingHistory.objects.get_or_create(user=user, book=book)
        reading_history.progress = progress
        reading_history.save()

        serializer = ReadingHistorySerializer(reading_history)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ReadingHistoryRetrieveUpdateView(generics.RetrieveUpdateAPIView):
    queryset = ReadingHistory.objects.all()
    serializer_class = ReadingHistorySerializer
    permission_classes = [IsAuthenticated]