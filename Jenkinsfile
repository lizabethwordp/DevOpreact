pipeline {
    
    agent any

    stages {
        stage('checkout'){
            steps {

                script {
                    sh "git clone https://github.com/lizabethwordp/DevOpreact.git"
                }
                
            }
        }
        stage("Build"){
            steps {
                script{
                    sh "pwd"
                    sh "npm install"
                }
            }
        }
    }
}