# steam-user-tags
Display a summary view of user tags, as well as a modal popup for the full list



ssh -i "rpt21.pem" ubuntu@ec2-34-211-181-237.us-west-2.compute.amazonaws.com

mkdir steam

cd steam

git clone https://github.com/FEC-Bell/steam-user-tags.git

cd steam-user-tags/

npm install

sudo apt update

sudo apt upgrade

sudo apt install mysql-server

sudo mysql_secure_installation

sudo mysql

ALTER USER 'root'@'localhost' IDENTIFIED WITH my
ssh -i "rpt21.pem" ubuntu@ec2-54-185-79-51.us-west-2.compute.amazonaws.comsql_native_password 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YourRootPassword';
FLUSH PRIVILEGES;

copy to db/config.js:
module.exports = {
  host: 'localhost',
  user: 'root',
  password: '{pwd}',
};

npm run seed

npm start

[new terminal] npm run build
