pipeline {
  agent {
    docker { image 'node:16.13.1-alpine' }
  }
  stages {
    stage('安装') {
      steps {
        sh "npm install"
      }
    }
    stage('打包') {
      steps {
        sh "npm package"
      }
    }
    stage('发布') {
      steps {
        sh "echo 发布了"
      }
    }
  }
}
