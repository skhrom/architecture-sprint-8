# Этап сборки
FROM eclipse-temurin:17-jdk-jammy as builder

WORKDIR /app

# Устанавливаем Maven
RUN apt-get update && apt-get install -y maven

# Копируем только pom.xml сначала (для лучшего кэширования)
COPY pom.xml .

# Скачиваем зависимости
RUN mvn dependency:go-offline

# Копируем исходный код
COPY src ./src

# Собираем приложение
RUN mvn clean package -DskipTests

# Этап выполнения
FROM eclipse-temurin:17-jre-jammy

WORKDIR /app

# Копируем собранный JAR
COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8081

ENTRYPOINT ["java", "-jar", "app.jar"]