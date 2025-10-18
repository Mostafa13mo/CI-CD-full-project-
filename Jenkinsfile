pipeline {
  agent any 
  stages {
      stage {
          steps('clone repo'){
                 git 'https://github.com/Mostafa13mo/CI-CD-Prometheus-Grafana.git'
          }

      }
      stage('Debug - List Files') {
            steps {
                sh '''
                    echo "=== Current directory ==="
                    pwd
                    echo "=== All files ==="
                    ls -la
                    echo "=== Git status ==="
                    git status
                    echo "=== Git log ==="
                    git log -1 --oneline
                '''
            }
      }
      stage('docker build') {
            steps {
                sh 'docker build -t docker.io/mostafa137/ci-cd00 .'
            }
      }
      stage('docker push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockercred', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh """
                        docker login -u \$USERNAME -p \$PASSWORD
                        docker push docker.io/mostafa137/ci-cd00
                    """
                }
            }    
      }
      stage('deploy') {
            steps {
               withCredentials([usernamePassword(credentialsId: 'dockercred', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
               sshagent(credentials: ['amrm-ssh-cred']) {
                     sh """
                         ssh -o StrictHostKeyChecking=no amrm@192.168.49.2 '
                          echo "$PASSWORD" | docker login -u "$USERNAME" --password-stdin
                          docker run  --name deploy -d -p 80:80 docker.io/mostafa137/ci-cd00
                        '
                      """  

                  }
                }
            }
      }   



 

  }


}