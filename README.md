# docker-cd-deploy
POC: deploy an app without any downtime using docker

### links

* http://southworks.com/blog/2015/07/17/docker-compose-scaling-multi-container-applications/
* http://jasonwilder.com/blog/2014/03/25/automated-nginx-reverse-proxy-for-docker/

### workflow

* update code using git pull
* check if new images are available
* check if any service have been updated using docker-compose.yml
* list services that need update + mandatory one (ie: web)

##### repeat until done

* scale up service
* make the load balancer register new service and remove one old one
* wait for the old service's connection to be processed (hint: netstat)
* kill the service

##### end

* rename docker container to clean up


### Notes / Questions

* If we need to update database and service, new one should be linked to new web only as for old one to old one.
