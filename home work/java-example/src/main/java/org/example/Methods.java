package org.example;

public class Methods {

    public static void main(String[] args) {
        // Створюємо масив з числами
        int[] numbers = {1, 23, 421, 5, 2, 4, 5, 2, 14, 7, 3, 2};

        // Викликаємо метод для обчислення суми масиву
        int sum = calculateSum(numbers);

        // Виводимо результат
        System.out.println("Сума елементів масиву: " + sum);
    }

    // Метод для обчислення суми елементів масиву
    public static int calculateSum(int[] arr) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i]; // Додаємо кожен елемент до суми
        }
        return sum; // Повертаємо обчислену суму
    }
}