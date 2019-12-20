# This script delete the old container (if existing) then build a new image and deploy a new container of the image.

# Set variables
FRONTEND_TAGNAME="ubp_front_v1"
FRONTEND_STORYBOOK_TAGNAME="ubp_front_storybook_v1"

# Delete the container if already running and then build and create the new container.
isContainerExisting="$(sudo docker ps --all --quiet --filter=name="$FRONTEND_TAGNAME")"
if [ -n "$isContainerExisting" ]; then
  echo "### DELETING old Container ###"
  sudo docker stop $FRONTEND_TAGNAME && sudo docker rm -f $FRONTEND_TAGNAME
  sudo docker stop $FRONTEND_STORYBOOK_TAGNAME && sudo docker rm -f $FRONTEND_STORYBOOK_TAGNAME
fi

echo "### Building docker images ### "
sudo docker build -t $FRONTEND_TAGNAME -f App.dockerfile .
sudo docker build -t $FRONTEND_STORYBOOK_TAGNAME -f Storybook.dockerfile .

echo "### Running docker container ### "
sudo docker run -d --name $FRONTEND_TAGNAME -p 80:3004 $FRONTEND_TAGNAME
sudo docker run -d --name $FRONTEND_STORYBOOK_TAGNAME -p 3003:3003 $FRONTEND_STORYBOOK_TAGNAME
