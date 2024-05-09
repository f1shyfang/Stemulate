import csv
from api.models import Data  # Replace 'myapp' with your actual app name

def import_books(file_path):
    with open(file_path, 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            Data.objects.create(
                text=row['text'],
                filename=row['filename'],
                parent_id=row['parent_id']
            )

if __name__ == '__main__':
    csv_file_path = './api/data.csv'  # Replace with your actual file path
    import_books(csv_file_path)