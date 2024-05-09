
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
    text = models.CharField(max_length=1000000)
    filename = models.CharField(max_length=100000)
    parent_id = models.CharField(max_length=10000)
    
    def __str__(self):
        return self.title
