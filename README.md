# steam-user-tags
Display a summary view of user tags, as well as a modal popup for the full list


ssh -i "rpt21.pem" ubuntu@ec2-54-185-79-51.us-west-2.compute.amazonaws.com

sudo apt update

sudo apt upgrade

sudo apt install mysql-server

sudo mysql_secure_installation

sudo mysql

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YourRootPassword';
FLUSH PRIVILEGES;
