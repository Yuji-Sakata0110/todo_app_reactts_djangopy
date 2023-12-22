from django.db import models
import uuid


class Todo(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=120)
    completed = models.BooleanField(default=False)

    def _str_(self) -> str:
        return self.title
