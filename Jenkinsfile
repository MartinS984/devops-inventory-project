pipeline {
    agent any

    environment {
        // REPLACE THIS WITH YOUR ACTUAL USERNAME!
        DOCKERHUB_USERNAME = 'martins984' 
        
        // This matches the ID we created in Jenkins Credentials
        DOCKER_CREDENTIAL_ID = 'docker-hub-credentials'
        
        // Image names
        BACKEND_IMAGE = "inventory-backend"
        FRONTEND_IMAGE = "inventory-frontend"
    }

    stages {
        stage('Build Docker Images') {
            steps {
                script {
                    echo '--- Building Backend ---'
                    sh "docker build -t ${DOCKERHUB_USERNAME}/${BACKEND_IMAGE}:latest ."
                    
                    echo '--- Building Frontend ---'
                    sh "docker build -t ${DOCKERHUB_USERNAME}/${FRONTEND_IMAGE}:latest ./client"
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                script {
                    echo '--- Logging in ---'
                    withCredentials([usernamePassword(credentialsId: DOCKER_CREDENTIAL_ID, usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                        sh "echo $PASS | docker login -u $USER --password-stdin"
                    }
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    echo '--- Pushing Backend ---'
                    sh "docker push ${DOCKERHUB_USERNAME}/${BACKEND_IMAGE}:latest"
                    
                    echo '--- Pushing Frontend ---'
                    sh "docker push ${DOCKERHUB_USERNAME}/${FRONTEND_IMAGE}:latest"
                }
            }
        }
    }
    
    post {
        always {
            // Clean up to save space
            sh "docker logout"
        }
    }
}