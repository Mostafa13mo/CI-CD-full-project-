pipeline {
     agent {
        docker {
            image 'bitnami/kubectl:latest'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
  stages {
      stage('cloning repo') {
          steps {
                 git 'https://github.com/Mostafa13mo/CI-CD-full-project-.git'
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
        stage('Deploy to Kubernetes (Minikube)') {
            steps {
                withCredentials([file(credentialsId: 'deploysecret', variable: 'KUBECONFIG_FILE')]) {
                    sh '''
                    echo "==== Deploying to Minikube Cluster ===="
                    export KUBECONFIG=$KUBECONFIG_FILE

                    
                    kubectl apply -f depl-svc.yml

                  
                    kubectl rollout status deployment/ci-cd00-deployment || true

                    echo "==== Deployment Completed ===="
                    '''
                }
            }
        }

        stage('Get Service URL') {
            steps {
                withCredentials([file(credentialsId: 'deploysecret', variable: 'KUBECONFIG_FILE')]) {
                    sh '''
                    export KUBECONFIG=$KUBECONFIG_FILE
                    echo "==== App Service URL ===="
                    minikube service ci-cd00-svc --url
                    '''
                }
            }
        }


 

  }



}

