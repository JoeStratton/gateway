#!/bin/bash


read -p "Please remember that for ease of use, it is best to make the root password root, this will save you a lot of headache.
Also keep in mind that curently this script only supports Debian, Fedora and Arch based Distros.
Press any key to continue..."

DISTRO=$(awk '/DISTRIB_ID=/' /etc/lsb-release | sed 's/DISTRIB_ID=//' | tr '[:upper:]' '[:lower:]')

echo Your distro is $DISTRO

read -p "Is the above correct? If so press any key to continue, otherwise please exit with Ctrl+c"

if [[ "$DISTRO" = "ubuntu" || "$DISTRO" = "debian" ]]
then
	#install required debian packages
	cat aptitude.txt | xargs sudo apt-get install --yes

	#install required python packages
	sudo pip install -r requirements.txt
	sudo pip install -r developer_requirements.txt


elif [[ "$DISTRO" = "fedora" || "$DISTRO" = "red hat" ]]
then
	#install yum packages
	cat yum.txt | xargs sudo yum install

	#install required python packages
	sudo pip install -r requirements.txt
	sudo pip install -r developer_requirements.txt

elif [[ "$DISTRO" = "arch linux" || "$DISTRO" = "manjaro" ]]
then
    #install reqs in yaourt
	cat yaourt.txt | xargs yaourt
	echo 2
	echo 4
	echo 1
	echo 2
	echo 5
	echo 4
	echo 1


fi


echo "create database gateway" | mysql --user=root --password=root

#set up django

cd ..
python manage.py syncdb --noinput

sudo npm install
