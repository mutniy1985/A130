var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "Прихожая",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": -2.7241644624176473,
        "pitch": 0.31434002322113486,
        "fov": 1.2249036464413798
      },
      "linkHotspots": [
        {
          "yaw": -2.892019529421326,
          "pitch": 0.2777758225684934,
          "rotation": 0,
          "target": "1-"
        },
        {
          "yaw": -2.908752059381495,
          "pitch": 0.5065382215619749,
          "rotation": 4.71238898038469,
          "target": "2-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-",
      "name": "Кухня",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": 1.9963837921671699,
        "pitch": 0.24163414214820378,
        "fov": 1.2249036464413798
      },
      "linkHotspots": [
        {
          "yaw": 1.8476999803769045,
          "pitch": 0.26750346108623546,
          "rotation": 0,
          "target": "0-"
        },
        {
          "yaw": 2.04437746680097,
          "pitch": 0.3981006449113469,
          "rotation": 1.5707963267948966,
          "target": "2-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-",
      "name": "Спальня",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.091118302881391,
          "pitch": 0.2785338367924215,
          "rotation": 0.7853981633974483,
          "target": "0-"
        },
        {
          "yaw": -2.168850933547942,
          "pitch": 0.4231080297881391,
          "rotation": 4.71238898038469,
          "target": "1-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "A130",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
