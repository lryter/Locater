from django.db import models

CATEGORY_CHOICES = ((1,  'Imbiss & Restaurant'), 
                                        (2,  'Lebensmittel'), 
                                        (3,  'Elektronik'), 
                                        (4,  'Kleidung'),
                                        (5, 'Fahrzeug'),
                                        (6,  'Schmuck'), 
                                        (7,  'Sport'),
                                       (8, 'Diverses') )

class Task(models.Model):
    name = models.CharField(max_length=100,  default='nothing')
    description = models.TextField(max_length=200,  default='nothing')
    category = models.IntegerField(choices=CATEGORY_CHOICES)
    pictures = models.ImageField(upload_to='uploads/',  default='uploads/fail.jpg')
    coordinatesx = models.FloatField( default = 0)
    coordinatesy = models.FloatField( default = 0)
    date_created =models.DateTimeField(auto_now=True)
    
    def ___str__(self):
        return "%s" % self.name
        