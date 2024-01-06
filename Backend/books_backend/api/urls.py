from django.urls import path
from .views import BookListCreateView, BookRetrieveUpdateView, ReadingHistoryListCreateView, ReadingHistoryRetrieveUpdateView

urlpatterns = [
    path('books/', BookListCreateView.as_view(), name='book-list-create'),
    path('books/<int:pk>/', BookRetrieveUpdateView.as_view(), name='reading-history-retrieve-update'),
    path('reading-history/', ReadingHistoryListCreateView.as_view(), name='reading-history-list-create'),
    path('reading-history/<int:pk>/', ReadingHistoryRetrieveUpdateView.as_view(), name='reading-history-retrieve-update'),
]