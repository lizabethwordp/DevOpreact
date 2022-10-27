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
                    
                    sh "npm install"
                }
            }
        }
        stage("Build image"){
            steps{
                script{
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

    }
}