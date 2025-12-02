pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                dir('student-erp-frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                dir('student-erp-frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('student-erp-frontend') {
                    sh 'npm test'
                }
            }
        }
    }

    post {
        success {
            echo "✅ Build Successful!"
        }
        failure {
            echo "❌ Build Failed!"
        }
    }
}

