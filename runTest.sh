hostnames=(http://lazycodemonkey.com http://www.evidentpoint.com http://stackoverflow.com http://reddit.com http://www.rbcroyalbank.com/)
elements=${#hostnames[@]}


for (( c=0; c<$elements; c++ ))
do
   phantomjs test.js ${hostnames[c]} &
done
