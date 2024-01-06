from rest_framework import serializers
from .models import Book, ReadingHistory

class BookSerializer(serializers.ModelSerializer):
    book_cover_url = serializers.SerializerMethodField()

    class Meta:
        model = Book
        fields = '__all__'

    def get_book_cover_url(self, obj):
        base_url = f'https://gutenberg.org/cache/epub/{obj.book_id}/images/cover.jpg'
        fallback_url = f'https://gutenberg.org/cache/epub/{obj.book_id}/{obj.book_id}-cover.png'

        cover_url = {'primary': base_url, 'fallback': fallback_url}
        return cover_url
    
    
class ReadingHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ReadingHistory
        fields = '__all__'
