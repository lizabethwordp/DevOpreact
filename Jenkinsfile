pipeline {
    
    agent any

    stages {
        stage('Initial_cleanup'){
            steps {

                dir ("${WORKSPACE}"){
                    deleteDir()
                }
                
            }
        }
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
                    sh "pwd && ls"
                    sh "cd DevOpreact"
                    sh "npm install"
                }
            }
        }
        stage("Build image"){
            steps{
                script{
                    sh "cd DevOpreact"
                    sh "docker build -t lizdockerhub/lizreactapp ."
                }
            }

        }
        stage("Push image"){
            steps{
                script{
                    sh "docker login -u ${env.username} -p ${env.password}"
                    sh "docker push lizdockerhub/lizreactapp"
                }
            }

        }
         stage("Docker logout"){
            steps{
                script{
                    sh "docker logout"
                }
            }

        }

    }
}