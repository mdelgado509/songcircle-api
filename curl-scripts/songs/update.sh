#!/bin/bash ID= TOKEN= TITLE= ARTIST=

API="http://localhost:4741"
URL_PATH="/songs"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "song": {
      "title": "'"${TITLE}"'",
      "artist": "'"${ARTIST}"'"
    }
  }'

echo
