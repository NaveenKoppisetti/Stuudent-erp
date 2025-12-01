pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'NodeJS', type: 'NodeJSInstallation'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/<your-username>/<repo>.git'
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('student_erp_frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('student_erp_frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Copy Frontend to Spring Boot') {
            steps {
                sh 'cp -r student_erp_frontend/dist/* student_erp_backend/student/src/main/resources/static/'
            }
        }

        stage('Build Spring Boot Backend') {
            steps {
                dir('student_erp_backend/student') {
                    sh './mvnw clean package'
                }
            }
        }

        stage('Run Spring Boot') {
            steps {
                dir('student_erp_backend/student') {
                    sh 'java -jar target/*.jar &'
                }
            }
        }
    }

    post {
        success {
            echo '✅ Build & Deployment Completed Successfully!'
        }
        failure {
            echo '❌ Build Failed!'
        }
    }
}
