pipeline {
    agent any
    stages {
        stage ('build') {
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