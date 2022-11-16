pipeline {
    agent any
    stages {
        stage ('build') {
            steps {
                node install
                }
        }
        stage ('test') {
            steps {
                node test
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