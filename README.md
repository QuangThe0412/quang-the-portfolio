#Build image
docker build -t portfolio:latest .

#Tag
docker tag portfolio:latest quangthe0412/portfolio:latest

#Push docker hub
docker push quangthe0412/portfolio:latest

#Docker pull
docker pull quangthe0412/portfolio:latest

#Docker run
docker run -d -p 3000:80 quangthe0412/portfolio:latest
