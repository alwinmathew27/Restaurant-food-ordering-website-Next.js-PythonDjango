from django.db import models


class Food(models.Model):

    CATEGORY_CHOICES = [
        ("starter", "Starter"),
        ("main_course", "Main Course"),
        ("dessert", "Dessert"),
        ("beverage", "Beverage"),
        ("meal", "Meal"),
    ]

    FOOD_TYPE_CHOICES = [
        ("veg", "Veg"),
        ("non_veg", "Non Veg"),
    ]

    name = models.CharField(max_length=100)
    description = models.TextField()

    ingredients = models.TextField(
        default="",
        help_text="Separate ingredients with commas"
    )

    price = models.DecimalField(max_digits=8, decimal_places=2)

    rating = models.DecimalField(
        max_digits=2,
        decimal_places=1,
        default=0
    )

    category = models.CharField(
        max_length=20,
        choices=CATEGORY_CHOICES,
        default="meal",
    )

    food_type = models.CharField(
        max_length=10,
        choices=FOOD_TYPE_CHOICES,
        default="veg",
    )

    image = models.ImageField(upload_to="foods/")

    def __str__(self):
        return self.name
    
