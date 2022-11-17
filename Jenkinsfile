pipeline {
    agent any
    stages {
        stage ('build') {
            steps {
                sh 'npm install'
                }
        }
        stage ('test') {
            steps {
                sh 'npm test'
            }
        }
    }
    post {
        success {
            echo "success"
        }
        failure {
            echo "failure for?"
        }
    }
}