pipeline {
    agent any
    stages {
        stage ('build') {
            npm install
        }
        stage ('test') {
            npm test
        }
    }
    post {
        success {
            echo "success"
        }
        failure {
            echo "failure"
        }
    }
}