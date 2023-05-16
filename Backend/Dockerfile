# Base image
FROM python:3.9-alpine

# Set working directory
WORKDIR /app/backend

# Copy and install requirements
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire project
COPY . .

# Set environment variables if necessary
# ENV VARIABLE_NAME value

# Set the command to run the backend server
CMD ["python", "test_project/manage.py", "runserver", "0.0.0.0:8000"]
