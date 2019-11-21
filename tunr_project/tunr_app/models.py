from django.db import models

class  Artist(models.Model):
    name = models.CharField(max_length=100, default='n/a')
    phot_url = models.CharField(max_length=100, default='n/a')
    nationality = models.CharField(max_length=100, default='n/a')

    def __str__(self):
        return self.name

class Song(models.Model):
    title = models.CharField(max_length=255, default = 'n/a')
    album = models.CharField(max_length=255, default = 'n/a')
    preview_url = models.TextField(default = 'n/a')
    artist = models.ForeignKey(Artist, on_delete = models.CASCADE, related_name = "songs")
    # CASCADE deletes child elements if parent is erased i.e. if an artist is deleted, so are their songs

    def __str__(self):
        return self.title
