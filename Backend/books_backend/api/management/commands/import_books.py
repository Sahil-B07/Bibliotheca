import csv
from django.core.management.base import BaseCommand
from api.models import Book

class Command(BaseCommand):
    help = 'Import books from a CSV file'

    def add_arguments(self, parser):
        parser.add_argument('csv_file', type=str, help='Path to the CSV file')

    def handle(self, *args, **kwargs):
        csv_file_path = kwargs['csv_file']

        with open(csv_file_path, 'r', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            for row in reader:
                # genres_list = [genre.strip() for genre in row['Genres'].split(';')]
                
                Book.objects.create(
                    book_id=row['Book_ID'],
                    book_title=row['Title'],
                    book_authors=row['Authors'],
                    book_genres=row['Genres'],
                    book_issue_date=row['Issued']
                )
