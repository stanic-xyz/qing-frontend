pipeline {
    stages {
         stage('编译') { 
             steps {
                 sh "npm install"
             }
        }
        stage('打包'){
            steps{
                sh "npm package"
            }
        }
        stage('发布'){
            steps{
                sh "echo 发布了"
            }
        }
    }
}
