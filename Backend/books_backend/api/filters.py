from django_filters import CharFilter, FilterSet
from .models import Book

class BookFilter(FilterSet):
    book_title = CharFilter(lookup_expr='icontains')
    book_authors = CharFilter(lookup_expr='icontains')
    book_genres = CharFilter(lookup_expr='icontains')

    class Meta:
        model = Book
        fields = ['book_title', 'book_authors', 'book_genres']


