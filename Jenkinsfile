pipeline {
    stages {
        stage("Build") {
            steps {
                sh '''
                    git checkout master
                    git pull
                    npm install

                    cp /home/debian/.env/kineweb/.env /var/lib/jenkins/workspace/kineweb/

                    npm run build
                    chown -R jenkins:jenkins build
                    rm -rf /home/debian/kineweb/build
                    cp -r /var/lib/jenkins/workspace/kineweb/build/ /home/debian/kineweb/
                '''
            }
        }
    }
}
