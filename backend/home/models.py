from django.db import models

class Food(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    rating = models.DecimalField(max_digits=2, decimal_places=1, default=0)
    image = models.ImageField(upload_to='foods/')
    def __str__(self):
        return self.name
    
