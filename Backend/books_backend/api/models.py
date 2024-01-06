from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class ReadingHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey('Book', on_delete=models.CASCADE)
    progress = models.PositiveIntegerField(default=0, help_text="Reading progress in percentage")

    class Meta:
        unique_together = ['user', 'book']


class Book(models.Model):
    book_id = models.IntegerField()
    book_title = models.TextField()
    book_authors = models.TextField()
    book_genres = models.JSONField(default=list)  # Use JSONField to store the genres as a list
    book_issue_date = models.DateField()

    def __str__(self):
        return f"{self.book_title} - {self.book_id}"
