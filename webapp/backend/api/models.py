
# Create your models here.
from django.db import models
from django.contrib.auth.models import User



class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.title

class Data(models.Model):
    type = models.TextField()
    element_id = models.TextField()
    text = models.TextField()
    coordinates_points = models.TextField()
    coordinates_system = models.TextField()
    coordinates_layout_width = models.TextField()
    coordinates_layout_height = models.TextField()
    file_directory = models.TextField()
    filename = models.TextField()
    languages = models.TextField()
    last_modified = models.TextField()
    page_number = models.TextField()
    filetype = models.TextField()
    parent_id = models.TextField()
    links = models.TextField()
    
    def __str__(self):
        return self.title
