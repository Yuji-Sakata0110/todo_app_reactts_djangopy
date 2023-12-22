from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo


# viewsetを定義する。CRUD操作が可能になる。todos or todos/id
class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
