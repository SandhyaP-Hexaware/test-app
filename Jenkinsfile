pipeline {
    agent any
    stages {
        stage ('build') {
            steps {
                npm install
                }
        }
        stage ('test') {
            steps {
                npm test
            }
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