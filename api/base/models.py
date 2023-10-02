from django.db import models

# Create your models here.


class Item(models.Model):
    name = models.CharField(max_length=100)
    desc = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-updated']

    def __str__(self) -> str:
        return self.name
