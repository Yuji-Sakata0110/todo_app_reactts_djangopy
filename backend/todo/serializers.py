from rest_framework import serializers
from .models import Todo


# models.py で定義した各フィールドをJSONに変換するSerializerを定義する。
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields: tuple = ("id", "title", "completed")
