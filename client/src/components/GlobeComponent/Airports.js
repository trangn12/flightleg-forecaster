const locations = [
    { lat: -6.082, lng: 145.392, city: 'GOROKA', size: 0.04, type: 'city' }, // AYGA
    { lat: -5.207, lng: 145.789, city: 'MADANG', size: 0.04, type: 'city' }, // AYMD
    { lat: -5.826, lng: 144.296, city: 'MOUNT HAGEN', size: 0.04, type: 'city' }, // AYMH
    { lat: -6.57, lng: 146.726, city: 'NADZAB', size: 0.04, type: 'city' }, // AYNZ
    { lat: -9.443, lng: 147.22, city: 'PORT MORESBY JACKSONS INTERNATIONAL', size: 0.04, type: 'city' }, // AYPY
    { lat: -3.584, lng: 143.669, city: 'WEWAK INTERNATIONAL', size: 0.04, type: 'city' }, // AYWK
    { lat: 61.161, lng: -45.427, city: 'NARSARSUAQ', size: 0.04, type: 'city' }, // BGBW
    { lat: 70.739, lng: -22.646, city: 'NERLERIT INAAT CONSTABLE PYNT', size: 0.04, type: 'city' }, // BGCO
    { lat: 64.191, lng: -51.678, city: 'NUUK', size: 0.04, type: 'city' }, // BGGH
    { lat: 69.233, lng: -51.067, city: 'JACOBSHAVN', size: 0.04, type: 'city' }, // BGJN
    { lat: 65.583, lng: -37.15, city: 'KULUSUK', size: 0.04, type: 'city' }, // BGKK
    { lat: 67.017, lng: -50.689, city: 'KANGERLUSSUAQ SONDRE STROMFJORD', size: 0.04, type: 'city' }, // BGSF
    { lat: 76.531, lng: -68.703, city: 'THULE AIR BASE', size: 0.04, type: 'city' }, // BGTL
    { lat: 65.66, lng: -18.072, city: 'AKUREYRI', size: 0.04, type: 'city' }, // BIAR
    { lat: 65.283, lng: -14.401, city: 'EGILSSTADIR', size: 0.04, type: 'city' }, // BIEG
    { lat: 64.296, lng: -15.227, city: 'HORNAFJORDUR', size: 0.04, type: 'city' }, // BIHN
    { lat: 65.952, lng: -17.426, city: 'HUSAVIK', size: 0.04, type: 'city' }, // BIHU
    { lat: 66.058, lng: -23.135, city: 'ISAFJORDUR', size: 0.04, type: 'city' }, // BIIS
    { lat: 63.985, lng: -22.606, city: 'KEFLAVIK NAS', size: 0.04, type: 'city' }, // BIKF
    { lat: 66.314, lng: -16.461, city: 'KOPASKER', size: 0.04, type: 'city' }, // BIKP
    { lat: 65.556, lng: -23.965, city: 'PATREKSFJORDUR', size: 0.04, type: 'city' }, // BIPA
    { lat: 64.13, lng: -21.941, city: 'REYKJAVIK', size: 0.04, type: 'city' }, // BIRK
    { lat: 66.133, lng: -18.917, city: 'SIGLUFJORDHUR', size: 0.04, type: 'city' }, // BISI
    { lat: 63.424, lng: -20.279, city: 'VESTMANNAEYJAR', size: 0.04, type: 'city' }, // BIVM
    { lat: 46.485, lng: -84.509, city: 'SAULT STE MARIE', size: 0.04, type: 'city' }, // CYAM
    { lat: 50.056, lng: -97.032, city: 'WINNIPEG ST ANDREWS', size: 0.04, type: 'city' }, // CYAV
    { lat: 44.64, lng: -63.499, city: 'SHEARWATER', size: 0.04, type: 'city' }, // CYAW
    { lat: 51.392, lng: -56.084, city: 'ST ANTHONY', size: 0.04, type: 'city' }, // CYAY
    { lat: 49.082, lng: -125.772, city: 'TOFINO', size: 0.04, type: 'city' }, // CYAZ
    { lat: 68.534, lng: -89.808, city: 'KUGAARUK', size: 0.04, type: 'city' }, // CYBB
    { lat: 49.132, lng: -68.207, city: 'BAIE COMEAU', size: 0.04, type: 'city' }, // CYBC
    { lat: 48.331, lng: -70.996, city: 'BAGOTVILLE', size: 0.04, type: 'city' }, // CYBG
    { lat: 64.299, lng: -96.078, city: 'BAKER LAKE', size: 0.04, type: 'city' }, // CYBK
    { lat: 49.951, lng: -125.271, city: 'CAMPBELL RIVER', size: 0.04, type: 'city' }, // CYBL
    { lat: 49.91, lng: -99.952, city: 'BRANDON MUNI', size: 0.04, type: 'city' }, // CYBR
    { lat: 69.108, lng: -105.138, city: 'CAMBRIDGE BAY', size: 0.04, type: 'city' }, // CYCB
    { lat: 49.052, lng: -123.87, city: 'NANAIMO', size: 0.04, type: 'city' }, // CYCD
    { lat: 49.296, lng: -117.632, city: 'CASTLEGAR', size: 0.04, type: 'city' }, // CYCG
    { lat: 47.008, lng: -65.449, city: 'MIRAMICHI', size: 0.04, type: 'city' }, // CYCH
    { lat: 47.991, lng: -66.331, city: 'CHARLO', size: 0.04, type: 'city' }, // CYCL
    { lat: 67.817, lng: -115.144, city: 'KUGLUKTUK', size: 0.04, type: 'city' }, // CYCO
    { lat: 52.075, lng: -111.445, city: 'CORONATION', size: 0.04, type: 'city' }, // CYCT
    { lat: 49.153, lng: -121.939, city: 'CHILLIWACK', size: 0.04, type: 'city' }, // CYCW
    { lat: 70.486, lng: -68.517, city: 'CLYDE RIVER', size: 0.04, type: 'city' }, // CYCY
    { lat: 50.332, lng: -115.874, city: 'FAIRMONT HOT SPRINGS', size: 0.04, type: 'city' }, // CYCZ
    { lat: 64.043, lng: -139.128, city: 'DAWSON', size: 0.04, type: 'city' }, // CYDA
    { lat: 61.371, lng: -139.041, city: 'BURWASH', size: 0.04, type: 'city' }, // CYDB
    { lat: 49.468, lng: -120.512, city: 'PRINCETON', size: 0.04, type: 'city' }, // CYDC
    { lat: 49.211, lng: -57.391, city: 'DEER LAKE', size: 0.04, type: 'city' }, // CYDF
    { lat: 58.422, lng: -130.032, city: 'DEASE LAKE', size: 0.04, type: 'city' }, // CYDL
    { lat: 51.101, lng: -100.052, city: 'DAUPHIN BARKER', size: 0.04, type: 'city' }, // CYDN
    { lat: 55.742, lng: -120.182, city: 'DAWSON CREEK', size: 0.04, type: 'city' }, // CYDQ
    { lat: 53.667, lng: -113.467, city: 'EDMONTON NAMAO', size: 0.04, type: 'city' }, // CYED
    { lat: 53.31, lng: -113.58, city: 'EDMONTON INTERNATIONAL', size: 0.04, type: 'city' }, // CYEG
    { lat: 61.094, lng: -94.071, city: 'ARVIAT', size: 0.04, type: 'city' }, // CYEK
    { lat: 49.21, lng: -102.966, city: 'ESTEVAN', size: 0.04, type: 'city' }, // CYEN
    { lat: 53.579, lng: -116.465, city: 'EDSON', size: 0.04, type: 'city' }, // CYET
    { lat: 79.995, lng: -85.813, city: 'EUREKA', size: 0.04, type: 'city' }, // CYEU
    { lat: 68.304, lng: -133.483, city: 'INUVIK MIKE ZUBKO', size: 0.04, type: 'city' }, // CYEV
    { lat: 63.756, lng: -68.556, city: 'IQALUIT', size: 0.04, type: 'city' }, // CYFB
    { lat: 45.869, lng: -66.532, city: 'FREDERICTON', size: 0.04, type: 'city' }, // CYFC
    { lat: 48.746, lng: -69.097, city: 'FORESTVILLE', size: 0.04, type: 'city' }, // CYFE
    { lat: 54.678, lng: -101.682, city: 'FLIN FLON', size: 0.04, type: 'city' }, // CYFO
    { lat: 61.181, lng: -113.69, city: 'FORT RESOLUTION', size: 0.04, type: 'city' }, // CYFR
    { lat: 61.76, lng: -121.237, city: 'FORT SIMPSON', size: 0.04, type: 'city' }, // CYFS
    { lat: 44.225, lng: -76.597, city: 'KINGSTON', size: 0.04, type: 'city' }, // CYGK
    { lat: 53.625, lng: -77.704, city: 'LA GRANDE RIVIERE', size: 0.04, type: 'city' }, // CYGL
    { lat: 48.775, lng: -64.479, city: 'GASPE', size: 0.04, type: 'city' }, // CYGP
    { lat: 49.778, lng: -86.939, city: 'GERALDTON GREENSTONE REGIONAL', size: 0.04, type: 'city' }, // CYGQ
    { lat: 47.425, lng: -61.778, city: 'ILES DE LA MADELEINE', size: 0.04, type: 'city' }, // CYGR
    { lat: 55.283, lng: -77.767, city: 'KUUJJUARAPIK', size: 0.04, type: 'city' }, // CYGW
    { lat: 56.35, lng: -94.7, city: 'GILLAM', size: 0.04, type: 'city' }, // CYGX
    { lat: 52.817, lng: -102.311, city: 'HUDSON BAY', size: 0.04, type: 'city' }, // CYHB
    { lat: 49.832, lng: -92.744, city: 'DRYDEN RGNL', size: 0.04, type: 'city' }, // CYHD
    { lat: 70.763, lng: -117.806, city: 'HOLMAN', size: 0.04, type: 'city' }, // CYHI
    { lat: 68.636, lng: -95.85, city: 'GJOA HAVEN', size: 0.04, type: 'city' }, // CYHK
    { lat: 43.173, lng: -79.935, city: 'HAMILTON', size: 0.04, type: 'city' }, // CYHM
    { lat: 45.517, lng: -73.417, city: 'ST HUBERT', size: 0.04, type: 'city' }, // CYHU
    { lat: 60.84, lng: -115.783, city: 'HAY RIVER', size: 0.04, type: 'city' }, // CYHY
    { lat: 44.881, lng: -63.509, city: 'HALIFAX INTERNATIONAL', size: 0.04, type: 'city' }, // CYHZ
    { lat: 48.774, lng: -91.639, city: 'ATIKOKAN MUNI', size: 0.04, type: 'city' }, // CYIB
    { lat: 72.683, lng: -77.967, city: 'POND INLET', size: 0.04, type: 'city' }, // CYIO
    { lat: 45.294, lng: -73.281, city: 'ST JEAN', size: 0.04, type: 'city' }, // CYJN
    { lat: 48.544, lng: -58.55, city: 'STEPHENVILLE', size: 0.04, type: 'city' }, // CYJT
    { lat: 50.702, lng: -120.442, city: 'KAMLOOPS', size: 0.04, type: 'city' }, // CYKA
    { lat: 43.459, lng: -80.384, city: 'WATERLOO RGNL', size: 0.04, type: 'city' }, // CYKF
    { lat: 54.805, lng: -66.805, city: 'SCHEFFERVILLE', size: 0.04, type: 'city' }, // CYKL
    { lat: 51.517, lng: -109.181, city: 'KINDERSLEY', size: 0.04, type: 'city' }, // CYKY
    { lat: 43.862, lng: -79.37, city: 'BUTTONVILLE MUNI', size: 0.04, type: 'city' }, // CYKZ
    { lat: 47.82, lng: -83.346, city: 'CHAPLEAU', size: 0.04, type: 'city' }, // CYLD
    { lat: 54.125, lng: -108.523, city: 'MEADOW LAKE', size: 0.04, type: 'city' }, // CYLJ
    { lat: 53.309, lng: -110.072, city: 'LLOYDMINSTER', size: 0.04, type: 'city' }, // CYLL
    { lat: 82.518, lng: -62.281, city: 'ALERT', size: 0.04, type: 'city' }, // CYLT
    { lat: 49.956, lng: -119.378, city: 'KELOWNA', size: 0.04, type: 'city' }, // CYLW
    { lat: 63.617, lng: -135.867, city: 'MAYO', size: 0.04, type: 'city' }, // CYMA
    { lat: 50.33, lng: -105.559, city: 'MOOSE JAW', size: 0.04, type: 'city' }, // CYMJ
    { lat: 56.653, lng: -111.222, city: 'FORT MCMURRAY', size: 0.04, type: 'city' }, // CYMM
    { lat: 51.291, lng: -80.608, city: 'MOOSONEE', size: 0.04, type: 'city' }, // CYMO
    { lat: 46.274, lng: -75.99, city: 'MANIWAKI', size: 0.04, type: 'city' }, // CYMW
    { lat: 45.68, lng: -74.039, city: 'MONTREAL INTERNATIONAL MIRABEL', size: 0.04, type: 'city' }, // CYMX
    { lat: 50.19, lng: -61.789, city: 'NATASHQUAN', size: 0.04, type: 'city' }, // CYNA
    { lat: 45.521, lng: -75.564, city: 'GATINEAU', size: 0.04, type: 'city' }, // CYND
    { lat: 49.762, lng: -77.803, city: 'MATAGAMI', size: 0.04, type: 'city' }, // CYNM
    { lat: 67.571, lng: -139.839, city: 'OLD CROW', size: 0.04, type: 'city' }, // CYOC
    { lat: 54.405, lng: -110.279, city: 'COLD LAKE', size: 0.04, type: 'city' }, // CYOD
    { lat: 58.621, lng: -117.165, city: 'HIGH LEVEL', size: 0.04, type: 'city' }, // CYOJ
    { lat: 45.323, lng: -75.669, city: 'OTTAWA MACDONALD CARTIER INTERNATIONAL', size: 0.04, type: 'city' }, // CYOW
    { lat: 53.214, lng: -105.673, city: 'PRINCE ALBERT GLASS FIELD', size: 0.04, type: 'city' }, // CYPA
    { lat: 56.227, lng: -117.447, city: 'PEACE RIVER', size: 0.04, type: 'city' }, // CYPE
    { lat: 49.903, lng: -98.275, city: 'SOUTHPORT', size: 0.04, type: 'city' }, // CYPG
    { lat: 49.216, lng: -122.71, city: 'PITT MEADOWS', size: 0.04, type: 'city' }, // CYPK
    { lat: 51.446, lng: -90.214, city: 'PICKLE LAKE', size: 0.04, type: 'city' }, // CYPL
    { lat: 49.836, lng: -64.289, city: 'PORT MENIER', size: 0.04, type: 'city' }, // CYPN
    { lat: 44.23, lng: -78.363, city: 'PETERBOROUGH', size: 0.04, type: 'city' }, // CYPQ
    { lat: 54.286, lng: -130.445, city: 'PRINCE RUPERT', size: 0.04, type: 'city' }, // CYPR
    { lat: 58.767, lng: -111.117, city: 'FORT CHIPEWYAN', size: 0.04, type: 'city' }, // CYPY
    { lat: 44.975, lng: -79.303, city: 'MUSKOKA', size: 0.04, type: 'city' }, // CYQA
    { lat: 46.788, lng: -71.398, city: 'QUEBEC JEAN LESAGE INTERNATIONAL', size: 0.04, type: 'city' }, // CYQB
    { lat: 52.179, lng: -113.893, city: 'RED DEER REGIONAL', size: 0.04, type: 'city' }, // CYQF
    { lat: 42.276, lng: -82.956, city: 'WINDSOR', size: 0.04, type: 'city' }, // CYQG
    { lat: 60.118, lng: -128.822, city: 'WATSON LAKE', size: 0.04, type: 'city' }, // CYQH
    { lat: 49.788, lng: -94.363, city: 'KENORA', size: 0.04, type: 'city' }, // CYQK
    { lat: 49.63, lng: -112.8, city: 'LETHBRIDGE', size: 0.04, type: 'city' }, // CYQL
    { lat: 46.112, lng: -64.679, city: 'GREATER MONCTON INTERNATIONAL', size: 0.04, type: 'city' }, // CYQM
    { lat: 50.183, lng: -86.696, city: 'NAKINA', size: 0.04, type: 'city' }, // CYQN
    { lat: 49.711, lng: -124.887, city: 'COMOX', size: 0.04, type: 'city' }, // CYQQ
    { lat: 50.432, lng: -104.666, city: 'REGINA INTERNATIONAL', size: 0.04, type: 'city' }, // CYQR
    { lat: 48.372, lng: -89.324, city: 'THUNDER BAY', size: 0.04, type: 'city' }, // CYQT
    { lat: 55.18, lng: -118.885, city: 'GRANDE PRAIRIE', size: 0.04, type: 'city' }, // CYQU
    { lat: 51.265, lng: -102.462, city: 'YORKTON MUNI', size: 0.04, type: 'city' }, // CYQV
    { lat: 52.769, lng: -108.244, city: 'NORTH BATTLEFORD', size: 0.04, type: 'city' }, // CYQW
    { lat: 48.937, lng: -54.568, city: 'GANDER INTERNATIONAL', size: 0.04, type: 'city' }, // CYQX
    { lat: 46.161, lng: -60.048, city: 'SYDNEY', size: 0.04, type: 'city' }, // CYQY
    { lat: 53.026, lng: -122.51, city: 'QUESNEL', size: 0.04, type: 'city' }, // CYQZ
    { lat: 74.717, lng: -94.969, city: 'RESOLUTE BAY', size: 0.04, type: 'city' }, // CYRB
    { lat: 47.764, lng: -69.585, city: 'RIVIERE DU LOUP', size: 0.04, type: 'city' }, // CYRI
    { lat: 48.52, lng: -72.266, city: 'ROBERVAL', size: 0.04, type: 'city' }, // CYRJ
    { lat: 52.43, lng: -114.904, city: 'ROCKY MOUNTAIN HOUSE', size: 0.04, type: 'city' }, // CYRM
    { lat: 62.811, lng: -92.116, city: 'RANKIN INLET', size: 0.04, type: 'city' }, // CYRT
    { lat: 46.625, lng: -80.799, city: 'SUDBURY', size: 0.04, type: 'city' }, // CYSB
    { lat: 45.438, lng: -71.691, city: 'SHERBROOKE', size: 0.04, type: 'city' }, // CYSC
    { lat: 45.316, lng: -65.89, city: 'SAINT JOHN', size: 0.04, type: 'city' }, // CYSJ
    { lat: 60.022, lng: -111.96, city: 'FORT SMITH', size: 0.04, type: 'city' }, // CYSM
    { lat: 72.982, lng: -84.614, city: 'NANISIVIK', size: 0.04, type: 'city' }, // CYSR
    { lat: 46.443, lng: -63.831, city: 'SUMMERSIDE', size: 0.04, type: 'city' }, // CYSU
    { lat: 71.994, lng: -125.243, city: 'SACHS HARBOUR', size: 0.04, type: 'city' }, // CYSY
    { lat: 64.23, lng: -76.527, city: 'CAPE DORSET', size: 0.04, type: 'city' }, // CYTE
    { lat: 55.801, lng: -97.864, city: 'THOMPSON', size: 0.04, type: 'city' }, // CYTH
    { lat: 44.119, lng: -77.528, city: 'TRENTON', size: 0.04, type: 'city' }, // CYTR
    { lat: 48.57, lng: -81.377, city: 'TIMMINS', size: 0.04, type: 'city' }, // CYTS
    { lat: 43.627, lng: -79.396, city: 'CITY CENTRE', size: 0.04, type: 'city' }, // CYTZ
    { lat: 69.433, lng: -133.026, city: 'TUKTOYAKTUK', size: 0.04, type: 'city' }, // CYUB
    { lat: 45.468, lng: -73.741, city: 'MONTREAL INTERNATIONAL DORVAL', size: 0.04, type: 'city' }, // CYUL
    { lat: 66.521, lng: -86.225, city: 'REPULSE BAY', size: 0.04, type: 'city' }, // CYUT
    { lat: 68.776, lng: -81.244, city: 'HALL BEACH', size: 0.04, type: 'city' }, // CYUX
    { lat: 48.206, lng: -78.836, city: 'ROUYN NORANDA', size: 0.04, type: 'city' }, // CYUY
    { lat: 55.151, lng: -105.262, city: 'LA RONGE', size: 0.04, type: 'city' }, // CYVC
    { lat: 53.356, lng: -110.824, city: 'VERMILION', size: 0.04, type: 'city' }, // CYVG
    { lat: 67.546, lng: -64.031, city: 'QIKIQTARJUAQ', size: 0.04, type: 'city' }, // CYVM
    { lat: 48.053, lng: -77.783, city: 'VAL D OR', size: 0.04, type: 'city' }, // CYVO
    { lat: 58.096, lng: -68.427, city: 'KUUJJUAQ', size: 0.04, type: 'city' }, // CYVP
    { lat: 65.282, lng: -126.8, city: 'NORMAN WELLS', size: 0.04, type: 'city' }, // CYVQ
    { lat: 49.195, lng: -123.182, city: 'VANCOUVER INTERNATIONAL', size: 0.04, type: 'city' }, // CYVR
    { lat: 55.842, lng: -108.418, city: 'BUFFALO NARROWS', size: 0.04, type: 'city' }, // CYVT
    { lat: 44.746, lng: -81.107, city: 'WIARTON', size: 0.04, type: 'city' }, // CYVV
    { lat: 45.952, lng: -77.319, city: 'PETAWAWA', size: 0.04, type: 'city' }, // CYWA
    { lat: 49.91, lng: -97.234, city: 'WINNIPEG INTERNATIONAL', size: 0.04, type: 'city' }, // CYWG
    { lat: 52.922, lng: -66.864, city: 'WABUSH', size: 0.04, type: 'city' }, // CYWK
    { lat: 52.183, lng: -122.054, city: 'WILLIAMS LAKE', size: 0.04, type: 'city' }, // CYWL
    { lat: 63.209, lng: -123.437, city: 'WRIGLEY', size: 0.04, type: 'city' }, // CYWY
    { lat: 49.61, lng: -115.782, city: 'CRANBROOK', size: 0.04, type: 'city' }, // CYXC
    { lat: 53.573, lng: -113.521, city: 'EDMONTON CITY CENTRE', size: 0.04, type: 'city' }, // CYXD
    { lat: 52.171, lng: -106.7, city: 'SASKATOON J G DIEFENBAKER INTERNATIONAL', size: 0.04, type: 'city' }, // CYXE
    { lat: 50.019, lng: -110.721, city: 'MEDICINE HAT', size: 0.04, type: 'city' }, // CYXH
    { lat: 56.238, lng: -120.74, city: 'FORT ST JOHN', size: 0.04, type: 'city' }, // CYXJ
    { lat: 50.114, lng: -91.904, city: 'SIOUX LOOKOUT', size: 0.04, type: 'city' }, // CYXL
    { lat: 66.145, lng: -65.714, city: 'PANGNIRTUNG', size: 0.04, type: 'city' }, // CYXP
    { lat: 47.695, lng: -79.849, city: 'TIMISKAMING RGNL', size: 0.04, type: 'city' }, // CYXR
    { lat: 53.889, lng: -122.679, city: 'PRINCE GEORGE', size: 0.04, type: 'city' }, // CYXS
    { lat: 54.466, lng: -128.577, city: 'TERRACE', size: 0.04, type: 'city' }, // CYXT
    { lat: 43.036, lng: -81.154, city: 'LONDON', size: 0.04, type: 'city' }, // CYXU
    { lat: 49.025, lng: -122.363, city: 'ABBOTSFORD', size: 0.04, type: 'city' }, // CYXX
    { lat: 60.709, lng: -135.068, city: 'WHITEHORSE INTERNATIONAL', size: 0.04, type: 'city' }, // CYXY
    { lat: 46.364, lng: -79.423, city: 'NORTH BAY', size: 0.04, type: 'city' }, // CYYB
    { lat: 51.114, lng: -114.02, city: 'CALGARY INTERNATIONAL', size: 0.04, type: 'city' }, // CYYC
    { lat: 54.825, lng: -127.183, city: 'SMITHERS', size: 0.04, type: 'city' }, // CYYD
    { lat: 58.836, lng: -122.597, city: 'FORT NELSON', size: 0.04, type: 'city' }, // CYYE
    { lat: 49.463, lng: -119.602, city: 'PENTICTON', size: 0.04, type: 'city' }, // CYYF
    { lat: 46.29, lng: -63.121, city: 'CHARLOTTETOWN', size: 0.04, type: 'city' }, // CYYG
    { lat: 69.547, lng: -93.577, city: 'TALOYOAK', size: 0.04, type: 'city' }, // CYYH
    { lat: 48.647, lng: -123.426, city: 'VICTORIA INTERNATIONAL', size: 0.04, type: 'city' }, // CYYJ
    { lat: 56.864, lng: -101.076, city: 'LYNN LAKE', size: 0.04, type: 'city' }, // CYYL
    { lat: 50.292, lng: -107.691, city: 'SWIFT CURRENT', size: 0.04, type: 'city' }, // CYYN
    { lat: 58.739, lng: -94.065, city: 'CHURCHILL', size: 0.04, type: 'city' }, // CYYQ
    { lat: 53.319, lng: -60.426, city: 'GOOSE BAY', size: 0.04, type: 'city' }, // CYYR
    { lat: 47.619, lng: -52.752, city: 'ST JOHNS INTERNATIONAL', size: 0.04, type: 'city' }, // CYYT
    { lat: 49.414, lng: -82.468, city: 'KAPUSKASING', size: 0.04, type: 'city' }, // CYYU
    { lat: 50.29, lng: -88.91, city: 'ARMSTRONG', size: 0.04, type: 'city' }, // CYYW
    { lat: 48.609, lng: -68.208, city: 'MONT JOLI', size: 0.04, type: 'city' }, // CYYY
    { lat: 43.677, lng: -79.631, city: 'LESTER B PEARSON INTERNATIONAL', size: 0.04, type: 'city' }, // CYYZ
    { lat: 43.742, lng: -79.466, city: 'DOWNSVIEW', size: 0.04, type: 'city' }, // CYZD
    { lat: 45.885, lng: -82.568, city: 'GORE BAY MANITOULIN', size: 0.04, type: 'city' }, // CYZE
    { lat: 62.463, lng: -114.44, city: 'YELLOWKNIFE', size: 0.04, type: 'city' }, // CYZF
    { lat: 55.293, lng: -114.778, city: 'SLAVE LAKE', size: 0.04, type: 'city' }, // CYZH
    { lat: 53.254, lng: -131.814, city: 'SANDSPIT', size: 0.04, type: 'city' }, // CYZP
    { lat: 42.999, lng: -82.309, city: 'CHRIS HADFIELD', size: 0.04, type: 'city' }, // CYZR
    { lat: 50.681, lng: -127.367, city: 'PORT HARDY', size: 0.04, type: 'city' }, // CYZT
    { lat: 54.144, lng: -115.787, city: 'WHITECOURT', size: 0.04, type: 'city' }, // CYZU
    { lat: 50.223, lng: -66.266, city: 'SEPT ILES', size: 0.04, type: 'city' }, // CYZV
    { lat: 60.173, lng: -132.743, city: 'TESLIN', size: 0.04, type: 'city' }, // CYZW
    { lat: 44.984, lng: -64.917, city: 'GREENWOOD', size: 0.04, type: 'city' }, // CYZX
    { lat: 62.208, lng: -133.376, city: 'FARO', size: 0.04, type: 'city' }, // CZFA
    { lat: 67.408, lng: -134.86, city: 'FORT MCPHERSON', size: 0.04, type: 'city' }, // CZFM
    { lat: 36.504, lng: 2.814, city: 'BLIDA', size: 0.04, type: 'city' }, // DAAB
    { lat: 35.333, lng: 4.206, city: 'BOU SAADA', size: 0.04, type: 'city' }, // DAAD
    { lat: 36.712, lng: 5.07, city: 'SOUMMAM', size: 0.04, type: 'city' }, // DAAE
    { lat: 36.691, lng: 3.215, city: 'HOUARI BOUMEDIENE', size: 0.04, type: 'city' }, // DAAG
    { lat: 24.293, lng: 9.452, city: 'TISKA', size: 0.04, type: 'city' }, // DAAJ
    { lat: 36.546, lng: 2.876, city: 'BOUFARIK', size: 0.04, type: 'city' }, // DAAK
    { lat: 36.109, lng: 6.364, city: 'TELERGHMA', size: 0.04, type: 'city' }, // DAAM
    { lat: 26.71, lng: 0.286, city: 'REGGANE', size: 0.04, type: 'city' }, // DAAN
    { lat: 26.573, lng: 8.484, city: 'ILLIZI', size: 0.04, type: 'city' }, // DAAP
    { lat: 35.525, lng: 2.879, city: 'AIN OUSSERA', size: 0.04, type: 'city' }, // DAAQ
    { lat: 36.178, lng: 5.324, city: 'SETIF AIN ARNAT', size: 0.04, type: 'city' }, // DAAS
    { lat: 22.811, lng: 5.451, city: 'TAMANRASSET', size: 0.04, type: 'city' }, // DAAT
    { lat: 36.795, lng: 5.873, city: 'JIJEL', size: 0.04, type: 'city' }, // DAAV
    { lat: 33.536, lng: -0.242, city: 'MECHERIA', size: 0.04, type: 'city' }, // DAAY
    { lat: 35.752, lng: 0.626, city: 'RELIZANE', size: 0.04, type: 'city' }, // DAAZ
    { lat: 36.822, lng: 7.809, city: 'ANNABA', size: 0.04, type: 'city' }, // DABB
    { lat: 36.277, lng: 6.624, city: 'MOHAMED BOUDIAF INTERNATIONAL', size: 0.04, type: 'city' }, // DABC
    { lat: 35.431, lng: 8.121, city: 'CHEIKH LARBI TEBESSI', size: 0.04, type: 'city' }, // DABS
    { lat: 32.93, lng: 3.312, city: 'HASSI R MEL', size: 0.04, type: 'city' }, // DAFH
    { lat: 35.341, lng: 1.463, city: 'BOU CHEKIF', size: 0.04, type: 'city' }, // DAOB
    { lat: 35.735, lng: -0.805, city: 'BOU SFER', size: 0.04, type: 'city' }, // DAOE
    { lat: 27.7, lng: -8.167, city: 'TINDOUF', size: 0.04, type: 'city' }, // DAOF
    { lat: 36.213, lng: 1.332, city: 'ECH CHELIFF', size: 0.04, type: 'city' }, // DAOI
    { lat: 35.542, lng: -0.532, city: 'TAFARAOUI', size: 0.04, type: 'city' }, // DAOL
    { lat: 35.017, lng: -1.45, city: 'ZENATA', size: 0.04, type: 'city' }, // DAON
    { lat: 35.624, lng: -0.621, city: 'ES SENIA', size: 0.04, type: 'city' }, // DAOO
    { lat: 35.172, lng: -0.593, city: 'SIDI BEL ABBES', size: 0.04, type: 'city' }, // DAOS
    { lat: 35.208, lng: 0.147, city: 'GHRISS', size: 0.04, type: 'city' }, // DAOV
    { lat: 27.837, lng: -0.186, city: 'TOUAT CHEIKH SIDI MOHAMED BELKEBIR', size: 0.04, type: 'city' }, // DAUA
    { lat: 34.793, lng: 5.738, city: 'BISKRA', size: 0.04, type: 'city' }, // DAUB
    { lat: 30.571, lng: 2.859, city: 'EL GOLEA', size: 0.04, type: 'city' }, // DAUE
    { lat: 32.384, lng: 3.794, city: 'NOUMERATE', size: 0.04, type: 'city' }, // DAUG
    { lat: 31.673, lng: 6.14, city: 'OUED IRARA', size: 0.04, type: 'city' }, // DAUH
    { lat: 27.251, lng: 2.512, city: 'IN SALAH', size: 0.04, type: 'city' }, // DAUI
    { lat: 33.068, lng: 6.089, city: 'SIDI MAHDI', size: 0.04, type: 'city' }, // DAUK
    { lat: 33.764, lng: 2.927, city: 'LAGHOUAT', size: 0.04, type: 'city' }, // DAUL
    { lat: 29.237, lng: 0.276, city: 'TIMIMOUN', size: 0.04, type: 'city' }, // DAUT
    { lat: 31.917, lng: 5.413, city: 'OUARGLA', size: 0.04, type: 'city' }, // DAUU
    { lat: 28.051, lng: 9.643, city: 'IN AMENAS', size: 0.04, type: 'city' }, // DAUZ
    { lat: 6.357, lng: 2.384, city: 'COTONOU CADJEHOUN', size: 0.04, type: 'city' }, // DBBB
    { lat: 9.357, lng: 2.609, city: 'PARAKOU', size: 0.04, type: 'city' }, // DBBP
    { lat: 12.353, lng: -1.512, city: 'OUAGADOUGOU', size: 0.04, type: 'city' }, // DFFD
    { lat: 11.16, lng: -4.331, city: 'BOBO DIOULASSO', size: 0.04, type: 'city' }, // DFOO
    { lat: 5.603, lng: -0.168, city: 'KOTOKA INTERNATIONAL', size: 0.04, type: 'city' }, // DGAA
    { lat: 9.563, lng: -0.863, city: 'TAMALE', size: 0.04, type: 'city' }, // DGLE
    { lat: 10.082, lng: -2.507, city: 'WA', size: 0.04, type: 'city' }, // DGLW
    { lat: 7.362, lng: -2.329, city: 'SUNYANI', size: 0.04, type: 'city' }, // DGSN
    { lat: 4.893, lng: -1.775, city: 'TAKORADI', size: 0.04, type: 'city' }, // DGTK
    { lat: 5.26, lng: -3.926, city: 'ABIDJAN FELIX HOUPHOUET BOIGNY INTERNATIONAL', size: 0.04, type: 'city' }, // DIAP
    { lat: 7.739, lng: -5.074, city: 'BOUAKE', size: 0.04, type: 'city' }, // DIBK
    { lat: 6.792, lng: -6.473, city: 'DALOA', size: 0.04, type: 'city' }, // DIDL
    { lat: 9.387, lng: -5.556, city: 'KORHOGO', size: 0.04, type: 'city' }, // DIKO
    { lat: 7.272, lng: -7.587, city: 'MAN', size: 0.04, type: 'city' }, // DIMN
    { lat: 4.747, lng: -6.661, city: 'SAN PEDRO', size: 0.04, type: 'city' }, // DISP
    { lat: 6.903, lng: -5.366, city: 'YAMOUSSOUKRO', size: 0.04, type: 'city' }, // DIYO
    { lat: 9.007, lng: 7.263, city: 'ABUJA NNAMDI AZIKIWE INTERNATIONAL', size: 0.04, type: 'city' }, // DNAA
    { lat: 7.247, lng: 5.301, city: 'AKURE', size: 0.04, type: 'city' }, // DNAK
    { lat: 6.317, lng: 5.599, city: 'BENIN', size: 0.04, type: 'city' }, // DNBE
    { lat: 4.976, lng: 8.347, city: 'CALABAR', size: 0.04, type: 'city' }, // DNCA
    { lat: 6.474, lng: 7.562, city: 'ENUGU', size: 0.04, type: 'city' }, // DNEN
    { lat: 12.172, lng: 6.696, city: 'GUSAU', size: 0.04, type: 'city' }, // DNGU
    { lat: 7.362, lng: 3.978, city: 'IBADAN', size: 0.04, type: 'city' }, // DNIB
    { lat: 8.44, lng: 4.494, city: 'ILORIN', size: 0.04, type: 'city' }, // DNIL
    { lat: 9.64, lng: 8.869, city: 'JOS', size: 0.04, type: 'city' }, // DNJO
    { lat: 10.696, lng: 7.32, city: 'KADUNA', size: 0.04, type: 'city' }, // DNKA
    { lat: 12.047, lng: 8.524, city: 'KANO MALLAM AMINU INTERNATIONAL', size: 0.04, type: 'city' }, // DNKN
    { lat: 11.855, lng: 13.081, city: 'MAIDUGURI', size: 0.04, type: 'city' }, // DNMA
    { lat: 7.704, lng: 8.614, city: 'MAKURDI', size: 0.04, type: 'city' }, // DNMK
    { lat: 6.577, lng: 3.321, city: 'LAGOS MURTALA MUHAMMED', size: 0.04, type: 'city' }, // DNMM
    { lat: 9.652, lng: 6.462, city: 'MINNA NEW', size: 0.04, type: 'city' }, // DNMN
    { lat: 5.015, lng: 6.949, city: 'PORT HARCOURT INTERNATIONAL', size: 0.04, type: 'city' }, // DNPO
    { lat: 12.916, lng: 5.207, city: 'SADIQ ABUBAKAR III INTERNATIONAL', size: 0.04, type: 'city' }, // DNSO
    { lat: 9.26, lng: 12.43, city: 'YOLA', size: 0.04, type: 'city' }, // DNYO
    { lat: 11.13, lng: 7.686, city: 'ZARIA', size: 0.04, type: 'city' }, // DNZA
    { lat: 13.502, lng: 7.127, city: 'MARADI', size: 0.04, type: 'city' }, // DRRM
    { lat: 13.481, lng: 2.184, city: 'DIORI HAMANI', size: 0.04, type: 'city' }, // DRRN
    { lat: 14.876, lng: 5.265, city: 'TAHOUA', size: 0.04, type: 'city' }, // DRRT
    { lat: 16.965, lng: 7.997, city: 'MANU DAYAK', size: 0.04, type: 'city' }, // DRZA
    { lat: 18.969, lng: 12.869, city: 'DIRKOU', size: 0.04, type: 'city' }, // DRZD
    { lat: 13.373, lng: 12.627, city: 'DIFFA', size: 0.04, type: 'city' }, // DRZF
    { lat: 13.779, lng: 8.984, city: 'ZINDER', size: 0.04, type: 'city' }, // DRZR
    { lat: 14.999, lng: 8.767, city: 'TANOUT', size: 0.04, type: 'city' }, // DRZT
    { lat: 35.758, lng: 10.755, city: 'HABIB BOURGUIBA INTERNATIONAL', size: 0.04, type: 'city' }, // DTMB
    { lat: 36.851, lng: 10.227, city: 'CARTHAGE', size: 0.04, type: 'city' }, // DTTA
    { lat: 37.245, lng: 9.791, city: 'SIDI AHMED AIR BASE', size: 0.04, type: 'city' }, // DTTB
    { lat: 32.306, lng: 10.382, city: 'REMADA', size: 0.04, type: 'city' }, // DTTD
    { lat: 34.422, lng: 8.822, city: 'GAFSA', size: 0.04, type: 'city' }, // DTTF
    { lat: 33.877, lng: 10.103, city: 'GABES', size: 0.04, type: 'city' }, // DTTG
    { lat: 36.721, lng: 9.943, city: 'BORDJ EL AMRI', size: 0.04, type: 'city' }, // DTTI
    { lat: 33.875, lng: 10.775, city: 'ZARZIS', size: 0.04, type: 'city' }, // DTTJ
    { lat: 31.704, lng: 9.254, city: 'EL BORMA', size: 0.04, type: 'city' }, // DTTR
    { lat: 34.718, lng: 10.691, city: 'THYNA', size: 0.04, type: 'city' }, // DTTX
    { lat: 33.94, lng: 8.111, city: 'NEFTA', size: 0.04, type: 'city' }, // DTTZ
    { lat: 9.767, lng: 1.091, city: 'NIAMTOUGOU', size: 0.04, type: 'city' }, // DXNG
    { lat: 6.166, lng: 1.254, city: 'LOME TOKOIN', size: 0.04, type: 'city' }, // DXXX
    { lat: 51.19, lng: 4.463, city: 'DEURNE', size: 0.04, type: 'city' }, // EBAW
    { lat: 50.759, lng: 4.768, city: 'BEAUVECHAIN', size: 0.04, type: 'city' }, // EBBE
    { lat: 51.168, lng: 5.471, city: 'KLEINE BROGEL', size: 0.04, type: 'city' }, // EBBL
    { lat: 50.902, lng: 4.499, city: 'BRUSSELS NATL', size: 0.04, type: 'city' }, // EBBR
    { lat: 51.333, lng: 4.5, city: 'BRAASCHAAT', size: 0.04, type: 'city' }, // EBBT
    { lat: 49.887, lng: 5.229, city: 'BERTRIX JEHONVILLE', size: 0.04, type: 'city' }, // EBBX
    { lat: 50.459, lng: 4.454, city: 'BRUSSELS SOUTH', size: 0.04, type: 'city' }, // EBCI
    { lat: 50.576, lng: 3.831, city: 'CHIEVRES AB', size: 0.04, type: 'city' }, // EBCV
    { lat: 51.09, lng: 2.653, city: 'KOKSIJDE', size: 0.04, type: 'city' }, // EBFN
    { lat: 50.244, lng: 4.649, city: 'FLORENNES', size: 0.04, type: 'city' }, // EBFS
    { lat: 50.818, lng: 3.208, city: 'WEVELGEM', size: 0.04, type: 'city' }, // EBKT
    { lat: 50.637, lng: 5.443, city: 'LIEGE', size: 0.04, type: 'city' }, // EBLG
    { lat: 51.199, lng: 2.862, city: 'OOSTENDE', size: 0.04, type: 'city' }, // EBOS
    { lat: 50.948, lng: 5.592, city: 'ZUTENDAAL', size: 0.04, type: 'city' }, // EBSL
    { lat: 50.788, lng: 5.193, city: 'ST TRUIDEN', size: 0.04, type: 'city' }, // EBST
    { lat: 51.144, lng: 3.474, city: 'URSEL', size: 0.04, type: 'city' }, // EBUL
    { lat: 51.395, lng: 4.961, city: 'WEELDE', size: 0.04, type: 'city' }, // EBWE
    { lat: 51.266, lng: 4.755, city: 'ZOERSEL', size: 0.04, type: 'city' }, // EBZR
    { lat: 51.193, lng: 14.52, city: 'BAUTZEN', size: 0.04, type: 'city' }, // EDAB
    { lat: 50.982, lng: 12.506, city: 'ALTENBURG NOBITZ', size: 0.04, type: 'city' }, // EDAC
    { lat: 51.832, lng: 12.186, city: 'DESSAU', size: 0.04, type: 'city' }, // EDAD
    { lat: 52.197, lng: 14.586, city: 'EISENHUTTENSTADT', size: 0.04, type: 'city' }, // EDAE
    { lat: 53.879, lng: 14.152, city: 'HERINGSDORF', size: 0.04, type: 'city' }, // EDAH
    { lat: 51.308, lng: 13.555, city: 'GROSSENHAIN', size: 0.04, type: 'city' }, // EDAK
    { lat: 51.363, lng: 11.941, city: 'MERSEBURG', size: 0.04, type: 'city' }, // EDAM
    { lat: 51.552, lng: 12.053, city: 'HALLE OPPIN', size: 0.04, type: 'city' }, // EDAQ
    { lat: 51.294, lng: 13.359, city: 'RIESA GOHLIS', size: 0.04, type: 'city' }, // EDAU
    { lat: 53.306, lng: 12.753, city: 'RECHLIN LARZ', size: 0.04, type: 'city' }, // EDAX
    { lat: 52.58, lng: 13.916, city: 'STRAUSBERG', size: 0.04, type: 'city' }, // EDAY
    { lat: 52.203, lng: 13.159, city: 'SCHONHAGEN', size: 0.04, type: 'city' }, // EDAZ
    { lat: 51.856, lng: 11.418, city: 'COCHSTEDT SCHNEIDLINGEN', size: 0.04, type: 'city' }, // EDBC
    { lat: 35.461, lng: -77.965, city: 'GOLDSBORO WAYNE MUNI', size: 0.04, type: 'city' }, // EDBG
    { lat: 54.338, lng: 12.71, city: 'BARTH', size: 0.04, type: 'city' }, // EDBH
    { lat: 50.917, lng: 11.714, city: 'JENA SCHONGLEINA', size: 0.04, type: 'city' }, // EDBJ
    { lat: 52.919, lng: 12.425, city: 'KYRITZ', size: 0.04, type: 'city' }, // EDBK
    { lat: 52.074, lng: 11.626, city: 'MAGDEBURG', size: 0.04, type: 'city' }, // EDBM
    { lat: 51.328, lng: 12.657, city: 'BRANDIS WALDPOLENZ', size: 0.04, type: 'city' }, // EDBN
    { lat: 51.364, lng: 14.952, city: 'ROTHENBURG GORLITZ', size: 0.04, type: 'city' }, // EDBR
    { lat: 53.833, lng: 13.669, city: 'ANKLAM', size: 0.04, type: 'city' }, // EDCA
    { lat: 51.889, lng: 14.532, city: 'COTTBUS DREWITZ', size: 0.04, type: 'city' }, // EDCD
    { lat: 51.721, lng: 11.962, city: 'KOTHEN', size: 0.04, type: 'city' }, // EDCK
    { lat: 51.296, lng: 14.129, city: 'KAMENZ', size: 0.04, type: 'city' }, // EDCM
    { lat: 52.38, lng: 13.523, city: 'SCHONEFELD', size: 0.04, type: 'city' }, // EDDB
    { lat: 51.133, lng: 13.767, city: 'DRESDEN', size: 0.04, type: 'city' }, // EDDC
    { lat: 50.98, lng: 10.958, city: 'ERFURT', size: 0.04, type: 'city' }, // EDDE
    { lat: 50.026, lng: 8.543, city: 'FRANKFURT MAIN', size: 0.04, type: 'city' }, // EDDF
    { lat: 52.134, lng: 7.685, city: 'MUNSTER OSNABRUCK', size: 0.04, type: 'city' }, // EDDG
    { lat: 53.63, lng: 9.988, city: 'HAMBURG', size: 0.04, type: 'city' }, // EDDH
    { lat: 52.473, lng: 13.404, city: 'TEMPELHOF', size: 0.04, type: 'city' }, // EDDI
    { lat: 50.866, lng: 7.143, city: 'KOLN BONN', size: 0.04, type: 'city' }, // EDDK
    { lat: 51.289, lng: 6.767, city: 'DUSSELDORF', size: 0.04, type: 'city' }, // EDDL
    { lat: 48.354, lng: 11.786, city: 'MUNICH', size: 0.04, type: 'city' }, // EDDM
    { lat: 49.499, lng: 11.078, city: 'NURNBERG', size: 0.04, type: 'city' }, // EDDN
    { lat: 51.424, lng: 12.236, city: 'LEIPZIG HALLE', size: 0.04, type: 'city' }, // EDDP
    { lat: 49.214, lng: 7.109, city: 'SAARBRUCKEN', size: 0.04, type: 'city' }, // EDDR
    { lat: 48.69, lng: 9.222, city: 'STUTTGART', size: 0.04, type: 'city' }, // EDDS
    { lat: 52.559, lng: 13.287, city: 'TEGEL', size: 0.04, type: 'city' }, // EDDT
    { lat: 52.461, lng: 9.685, city: 'HANNOVER', size: 0.04, type: 'city' }, // EDDV
    { lat: 53.047, lng: 8.787, city: 'BREMEN', size: 0.04, type: 'city' }, // EDDW
    { lat: 49.961, lng: 8.644, city: 'EGELSBACH', size: 0.04, type: 'city' }, // EDFE
    { lat: 49.95, lng: 7.264, city: 'FRANKFURT HAHN', size: 0.04, type: 'city' }, // EDFH
    { lat: 49.473, lng: 8.514, city: 'MANNHEIM CITY', size: 0.04, type: 'city' }, // EDFM
    { lat: 51.035, lng: 8.679, city: 'ALLENDORF EDER', size: 0.04, type: 'city' }, // EDFQ
    { lat: 49.606, lng: 8.368, city: 'WORMS', size: 0.04, type: 'city' }, // EDFV
    { lat: 49.969, lng: 8.147, city: 'MAINZ FINTHEN', size: 0.04, type: 'city' }, // EDFZ
    { lat: 50.993, lng: 10.473, city: 'EISENACH KINDEL', size: 0.04, type: 'city' }, // EDGE
    { lat: 50.708, lng: 8.082, city: 'SIEGERLAND', size: 0.04, type: 'city' }, // EDGS
    { lat: 53.535, lng: 9.835, city: 'HAMBURG FINKENWERDER', size: 0.04, type: 'city' }, // EDHI
    { lat: 54.379, lng: 10.145, city: 'KIEL HOLTENAU', size: 0.04, type: 'city' }, // EDHK
    { lat: 53.805, lng: 10.719, city: 'LUBECK BLANKENSEE', size: 0.04, type: 'city' }, // EDHL
    { lat: 50.823, lng: 6.187, city: 'AACHEN MERZBRUCK', size: 0.04, type: 'city' }, // EDKA
    { lat: 50.406, lng: 6.528, city: 'DAHLEMER BINZ', size: 0.04, type: 'city' }, // EDKV
    { lat: 51.099, lng: 7.602, city: 'MEINERZHAGEN', size: 0.04, type: 'city' }, // EDKZ
    { lat: 51.483, lng: 7.899, city: 'ARNSBERG MENDEN', size: 0.04, type: 'city' }, // EDLA
    { lat: 51.53, lng: 6.537, city: 'KAMP LINTFORT', size: 0.04, type: 'city' }, // EDLC
    { lat: 51.401, lng: 6.936, city: 'ESSEN MULHEIM', size: 0.04, type: 'city' }, // EDLE
    { lat: 51.23, lng: 6.504, city: 'MONCHENGLADBACH', size: 0.04, type: 'city' }, // EDLN
    { lat: 51.614, lng: 8.616, city: 'PADERBORN LIPPSTADT', size: 0.04, type: 'city' }, // EDLP
    { lat: 51.996, lng: 6.84, city: 'STADTLOHN VREDEN', size: 0.04, type: 'city' }, // EDLS
    { lat: 51.518, lng: 7.612, city: 'DORTMUND', size: 0.04, type: 'city' }, // EDLW
    { lat: 48.425, lng: 10.932, city: 'AUGSBURG', size: 0.04, type: 'city' }, // EDMA
    { lat: 48.111, lng: 9.763, city: 'BIBERACH AN DER RISS', size: 0.04, type: 'city' }, // EDMB
    { lat: 48.396, lng: 12.724, city: 'EGGENFELDEN', size: 0.04, type: 'city' }, // EDME
    { lat: 48.081, lng: 11.283, city: 'OBERPFAFFENHOFEN', size: 0.04, type: 'city' }, // EDMO
    { lat: 48.901, lng: 12.518, city: 'STRAUBING', size: 0.04, type: 'city' }, // EDMS
    { lat: 48.636, lng: 13.195, city: 'VILSHOFEN', size: 0.04, type: 'city' }, // EDMV
    { lat: 47.859, lng: 10.014, city: 'LEUTKIRCH UNTERZEIL', size: 0.04, type: 'city' }, // EDNL
    { lat: 47.671, lng: 9.511, city: 'FRIEDRICHSHAFEN', size: 0.04, type: 'city' }, // EDNY
    { lat: 53.427, lng: 11.783, city: 'SCHWERIN PARCHIM', size: 0.04, type: 'city' }, // EDOP
    { lat: 52.629, lng: 11.82, city: 'STENDAL BORSTEL', size: 0.04, type: 'city' }, // EDOV
    { lat: 48.778, lng: 10.264, city: 'AALEN HEIDENHEIM ELCHINGEN', size: 0.04, type: 'city' }, // EDPA
    { lat: 50.263, lng: 10.996, city: 'COBURG BRANDENSTEINSEBENE', size: 0.04, type: 'city' }, // EDQC
    { lat: 49.984, lng: 11.638, city: 'BAYREUTH', size: 0.04, type: 'city' }, // EDQD
    { lat: 49.794, lng: 11.132, city: 'BURG FEUERSTEIN', size: 0.04, type: 'city' }, // EDQE
    { lat: 50.289, lng: 11.855, city: 'HOF PLAUEN', size: 0.04, type: 'city' }, // EDQM
    { lat: 49.863, lng: 11.788, city: 'ROSENTHAL FIELD PLOSSEN', size: 0.04, type: 'city' }, // EDQP
    { lat: 50.018, lng: 10.529, city: 'HASSFURT SCHWEINFURT', size: 0.04, type: 'city' }, // EDQT
    { lat: 50.325, lng: 7.531, city: 'KOBLENZ WINNINGEN', size: 0.04, type: 'city' }, // EDRK
    { lat: 49.863, lng: 6.789, city: 'TRIER FOHREN', size: 0.04, type: 'city' }, // EDRT
    { lat: 49.302, lng: 8.451, city: 'SPEYER', size: 0.04, type: 'city' }, // EDRY
    { lat: 49.209, lng: 7.401, city: 'ZWEIBRUCKEN', size: 0.04, type: 'city' }, // EDRZ
    { lat: 48.791, lng: 8.187, city: 'BADEN OOS', size: 0.04, type: 'city' }, // EDTB
    { lat: 47.973, lng: 8.522, city: 'DONAUESCHINGEN VILLINGEN', size: 0.04, type: 'city' }, // EDTD
    { lat: 48.02, lng: 7.834, city: 'FREIBURG', size: 0.04, type: 'city' }, // EDTF
    { lat: 48.982, lng: 8.333, city: 'KARLSRUHE FORCHHEIM', size: 0.04, type: 'city' }, // EDTK
    { lat: 48.054, lng: 9.373, city: 'MENGEN HOHENTENGEN', size: 0.04, type: 'city' }, // EDTM
    { lat: 49.118, lng: 9.777, city: 'SCHWABISCH HALL HESSENTAL', size: 0.04, type: 'city' }, // EDTY
    { lat: 51.608, lng: 13.738, city: 'FINSTERWALDE SCHACKSDORF', size: 0.04, type: 'city' }, // EDUS
    { lat: 52.319, lng: 10.556, city: 'BRAUNSCHWEIG', size: 0.04, type: 'city' }, // EDVE
    { lat: 51.408, lng: 9.378, city: 'KASSEL CALDEN', size: 0.04, type: 'city' }, // EDVK
    { lat: 52.177, lng: 9.946, city: 'HILDESHEIM', size: 0.04, type: 'city' }, // EDVM
    { lat: 53.503, lng: 8.573, city: 'BREMERHAVEN', size: 0.04, type: 'city' }, // EDWB
    { lat: 53.143, lng: 8.623, city: 'LEMWERDER', size: 0.04, type: 'city' }, // EDWD
    { lat: 53.391, lng: 7.227, city: 'EMDEN', size: 0.04, type: 'city' }, // EDWE
    { lat: 53.272, lng: 7.443, city: 'LEER PAPENBURG', size: 0.04, type: 'city' }, // EDWF
    { lat: 53.505, lng: 8.053, city: 'WILHELMSHAVEN MARIENSIEL', size: 0.04, type: 'city' }, // EDWI
    { lat: 53.595, lng: 6.709, city: 'BORKUM', size: 0.04, type: 'city' }, // EDWR
    { lat: 53.707, lng: 7.23, city: 'NORDERNEY', size: 0.04, type: 'city' }, // EDWY
    { lat: 54.772, lng: 9.378, city: 'FLENSBURG SCHAFERHAUS', size: 0.04, type: 'city' }, // EDXF
    { lat: 54.221, lng: 9.601, city: 'RENDSBURG SCHACHTHOLM', size: 0.04, type: 'city' }, // EDXR
    { lat: 54.913, lng: 8.34, city: 'WESTERLAND SYLT', size: 0.04, type: 'city' }, // EDXW
    { lat: 59.259, lng: 24.204, city: 'AMARI', size: 0.04, type: 'city' }, // EEEI
    { lat: 58.991, lng: 22.831, city: 'KARDLA', size: 0.04, type: 'city' }, // EEKA
    { lat: 58.23, lng: 22.509, city: 'KURESSAARE', size: 0.04, type: 'city' }, // EEKE
    { lat: 58.419, lng: 24.473, city: 'PARNU', size: 0.04, type: 'city' }, // EEPU
    { lat: 59.413, lng: 24.833, city: 'TALLINN', size: 0.04, type: 'city' }, // EETN
    { lat: 58.307, lng: 26.69, city: 'TARTU', size: 0.04, type: 'city' }, // EETU
    { lat: 68.362, lng: 23.424, city: 'ENONTEKIO', size: 0.04, type: 'city' }, // EFET
    { lat: 61.116, lng: 22.201, city: 'EURA', size: 0.04, type: 'city' }, // EFEU
    { lat: 61.856, lng: 24.786, city: 'HALLI', size: 0.04, type: 'city' }, // EFHA
    { lat: 60.254, lng: 25.043, city: 'HELSINKI MALMI', size: 0.04, type: 'city' }, // EFHF
    { lat: 60.32, lng: 24.956, city: 'HELSINKI VANTAA', size: 0.04, type: 'city' }, // EFHK
    { lat: 61.689, lng: 23.074, city: 'HAMEENKYRO', size: 0.04, type: 'city' }, // EFHM
    { lat: 59.849, lng: 23.083, city: 'HANKO', size: 0.04, type: 'city' }, // EFHN
    { lat: 60.654, lng: 24.881, city: 'HYVINKAA', size: 0.04, type: 'city' }, // EFHV
    { lat: 60.463, lng: 23.652, city: 'KIIKALA', size: 0.04, type: 'city' }, // EFIK
    { lat: 61.249, lng: 28.904, city: 'IMMOLA', size: 0.04, type: 'city' }, // EFIM
    { lat: 62.166, lng: 30.074, city: 'KITEE', size: 0.04, type: 'city' }, // EFIT
    { lat: 68.607, lng: 27.405, city: 'IVALO', size: 0.04, type: 'city' }, // EFIV
    { lat: 62.659, lng: 29.624, city: 'JOENSUU', size: 0.04, type: 'city' }, // EFJO
    { lat: 62.399, lng: 25.678, city: 'JYVASKYLA', size: 0.04, type: 'city' }, // EFJY
    { lat: 63.127, lng: 23.051, city: 'KAUHAVA', size: 0.04, type: 'city' }, // EFKA
    { lat: 65.782, lng: 24.599, city: 'KEMI TORNIO', size: 0.04, type: 'city' }, // EFKE
    { lat: 64.285, lng: 27.692, city: 'KAJAANI', size: 0.04, type: 'city' }, // EFKI
    { lat: 62.463, lng: 22.393, city: 'KAUHAJOKI', size: 0.04, type: 'city' }, // EFKJ
    { lat: 63.721, lng: 23.143, city: 'KRUUNUPYY', size: 0.04, type: 'city' }, // EFKK
    { lat: 66.713, lng: 27.157, city: 'KEMIJARVI', size: 0.04, type: 'city' }, // EFKM
    { lat: 65.987, lng: 29.239, city: 'KUUSAMO', size: 0.04, type: 'city' }, // EFKS
    { lat: 67.701, lng: 24.847, city: 'KITTILA', size: 0.04, type: 'city' }, // EFKT
    { lat: 63.007, lng: 27.798, city: 'KUOPIO', size: 0.04, type: 'city' }, // EFKU
    { lat: 61.144, lng: 25.693, city: 'LAHTI VESIVEHMAA', size: 0.04, type: 'city' }, // EFLA
    { lat: 61.044, lng: 28.144, city: 'LAPPEENRANTA', size: 0.04, type: 'city' }, // EFLP
    { lat: 60.122, lng: 19.898, city: 'MARIEHAMN', size: 0.04, type: 'city' }, // EFMA
    { lat: 62.947, lng: 23.519, city: 'MENKIJARVI', size: 0.04, type: 'city' }, // EFME
    { lat: 61.686, lng: 27.202, city: 'MIKKELI', size: 0.04, type: 'city' }, // EFMI
    { lat: 60.334, lng: 24.296, city: 'NUMMELA', size: 0.04, type: 'city' }, // EFNU
    { lat: 64.93, lng: 25.354, city: 'OULU', size: 0.04, type: 'city' }, // EFOU
    { lat: 61.246, lng: 22.193, city: 'PIIKAJARVI', size: 0.04, type: 'city' }, // EFPI
    { lat: 61.462, lng: 21.8, city: 'PORI', size: 0.04, type: 'city' }, // EFPO
    { lat: 65.402, lng: 26.947, city: 'PUDASJARVI', size: 0.04, type: 'city' }, // EFPU
    { lat: 63.732, lng: 25.926, city: 'PYHASALMI', size: 0.04, type: 'city' }, // EFPY
    { lat: 64.688, lng: 24.696, city: 'RAAHE PATTIJOKI', size: 0.04, type: 'city' }, // EFRH
    { lat: 62.065, lng: 28.356, city: 'RANTASALMI', size: 0.04, type: 'city' }, // EFRN
    { lat: 66.565, lng: 25.83, city: 'ROVANIEMI', size: 0.04, type: 'city' }, // EFRO
    { lat: 60.745, lng: 24.108, city: 'RAYSKALA', size: 0.04, type: 'city' }, // EFRY
    { lat: 61.943, lng: 28.945, city: 'SAVONLINNA', size: 0.04, type: 'city' }, // EFSA
    { lat: 61.062, lng: 26.799, city: 'SELANPAA', size: 0.04, type: 'city' }, // EFSE
    { lat: 67.395, lng: 26.619, city: 'SODANKYLA', size: 0.04, type: 'city' }, // EFSO
    { lat: 61.414, lng: 23.604, city: 'TAMPERE PIRKKALA', size: 0.04, type: 'city' }, // EFTP
    { lat: 61.773, lng: 24.027, city: 'TEISKO', size: 0.04, type: 'city' }, // EFTS
    { lat: 60.514, lng: 22.263, city: 'TURKU', size: 0.04, type: 'city' }, // EFTU
    { lat: 60.896, lng: 26.938, city: 'UTTI', size: 0.04, type: 'city' }, // EFUT
    { lat: 63.051, lng: 21.761, city: 'VAASA', size: 0.04, type: 'city' }, // EFVA
    { lat: 62.171, lng: 27.869, city: 'VARKAUS', size: 0.04, type: 'city' }, // EFVR
    { lat: 64.06, lng: 24.716, city: 'YLIVIESKA', size: 0.04, type: 'city' }, // EFYL
    { lat: 54.657, lng: -6.216, city: 'ALDERGROVE', size: 0.04, type: 'city' }, // EGAA
    { lat: 54.399, lng: -7.652, city: 'ST ANGELO', size: 0.04, type: 'city' }, // EGAB
    { lat: 54.618, lng: -5.873, city: 'CITY', size: 0.04, type: 'city' }, // EGAC
    { lat: 55.043, lng: -7.161, city: 'LONDONDERRY EGLINTON', size: 0.04, type: 'city' }, // EGAE
    { lat: 52.454, lng: -1.748, city: 'BIRMINGHAM', size: 0.04, type: 'city' }, // EGBB
    { lat: 52.37, lng: -1.48, city: 'COVENTRY', size: 0.04, type: 'city' }, // EGBE
    { lat: 52.608, lng: -1.032, city: 'LEICESTER', size: 0.04, type: 'city' }, // EGBG
    { lat: 51.894, lng: -2.167, city: 'GLOUCESTERSHIRE', size: 0.04, type: 'city' }, // EGBJ
    { lat: 52.92, lng: -1.079, city: 'NOTTINGHAM', size: 0.04, type: 'city' }, // EGBN
    { lat: 52.517, lng: -2.26, city: 'WOLVERHAMPTON', size: 0.04, type: 'city' }, // EGBO
    { lat: 51.668, lng: -2.057, city: 'KEMBLE', size: 0.04, type: 'city' }, // EGBP
    { lat: 52.041, lng: -1.096, city: 'TURWESTON', size: 0.04, type: 'city' }, // EGBT
    { lat: 53.354, lng: -2.275, city: 'MANCHESTER', size: 0.04, type: 'city' }, // EGCC
    { lat: 53.338, lng: -2.149, city: 'MANCHESTER WOODFORD', size: 0.04, type: 'city' }, // EGCD
    { lat: 53.56, lng: -0.858, city: 'SANDTOFT', size: 0.04, type: 'city' }, // EGCF
    { lat: 51.087, lng: -4.15, city: 'CHIVENOR', size: 0.04, type: 'city' }, // EGDC
    { lat: 50.441, lng: -4.995, city: 'ST MAWGAN', size: 0.04, type: 'city' }, // EGDG
    { lat: 51.505, lng: -1.993, city: 'LYNEHAM', size: 0.04, type: 'city' }, // EGDL
    { lat: 51.152, lng: -1.747, city: 'BOSCOMBE DOWN', size: 0.04, type: 'city' }, // EGDM
    { lat: 50.086, lng: -5.256, city: 'CULDROSE', size: 0.04, type: 'city' }, // EGDR
    { lat: 51.405, lng: -3.436, city: 'ST ATHAN', size: 0.04, type: 'city' }, // EGDX
    { lat: 51.009, lng: -2.639, city: 'YEOVILTON', size: 0.04, type: 'city' }, // EGDY
    { lat: 51.833, lng: -4.961, city: 'HAVERFORDWEST', size: 0.04, type: 'city' }, // EGFE
    { lat: 51.397, lng: -3.343, city: 'CARDIFF', size: 0.04, type: 'city' }, // EGFF
    { lat: 51.605, lng: -4.068, city: 'SWANSEA', size: 0.04, type: 'city' }, // EGFH
    { lat: 51.383, lng: -2.719, city: 'BRISTOL', size: 0.04, type: 'city' }, // EGGD
    { lat: 53.334, lng: -2.85, city: 'LIVERPOOL', size: 0.04, type: 'city' }, // EGGP
    { lat: 51.874, lng: -0.368, city: 'LUTON', size: 0.04, type: 'city' }, // EGGW
    { lat: 50.423, lng: -4.106, city: 'PLYMOUTH', size: 0.04, type: 'city' }, // EGHD
    { lat: 50.78, lng: -1.843, city: 'BOURNEMOUTH', size: 0.04, type: 'city' }, // EGHH
    { lat: 50.95, lng: -1.357, city: 'SOUTHAMPTON', size: 0.04, type: 'city' }, // EGHI
    { lat: 51.185, lng: -1.032, city: 'LASHAM', size: 0.04, type: 'city' }, // EGHL
    { lat: 49.435, lng: -2.602, city: 'GUERNSEY', size: 0.04, type: 'city' }, // EGJB
    { lat: 49.208, lng: -2.195, city: 'JERSEY', size: 0.04, type: 'city' }, // EGJJ
    { lat: 50.836, lng: -0.297, city: 'SHOREHAM', size: 0.04, type: 'city' }, // EGKA
    { lat: 51.331, lng: 0.033, city: 'BIGGIN HILL', size: 0.04, type: 'city' }, // EGKB
    { lat: 51.148, lng: -0.19, city: 'GATWICK', size: 0.04, type: 'city' }, // EGKK
    { lat: 51.505, lng: 0.054, city: 'CITY', size: 0.04, type: 'city' }, // EGLC
    { lat: 51.276, lng: -0.776, city: 'FARNBOROUGH', size: 0.04, type: 'city' }, // EGLF
    { lat: 51.676, lng: -1.081, city: 'CHALGROVE', size: 0.04, type: 'city' }, // EGLJ
    { lat: 51.324, lng: -0.848, city: 'BLACKBUSHE', size: 0.04, type: 'city' }, // EGLK
    { lat: 51.477, lng: -0.461, city: 'HEATHROW', size: 0.04, type: 'city' }, // EGLL
    { lat: 51.571, lng: 0.696, city: 'SOUTHEND', size: 0.04, type: 'city' }, // EGMC
    { lat: 50.956, lng: 0.939, city: 'LYDD', size: 0.04, type: 'city' }, // EGMD
    { lat: 51.342, lng: 1.346, city: 'MANSTON', size: 0.04, type: 'city' }, // EGMH
    { lat: 53.719, lng: -0.566, city: 'BROUGH', size: 0.04, type: 'city' }, // EGNB
    { lat: 54.938, lng: -2.809, city: 'CARLISLE', size: 0.04, type: 'city' }, // EGNC
    { lat: 53.772, lng: -3.029, city: 'BLACKPOOL', size: 0.04, type: 'city' }, // EGNH
    { lat: 53.574, lng: -0.351, city: 'HUMBERSIDE', size: 0.04, type: 'city' }, // EGNJ
    { lat: 54.13, lng: -3.256, city: 'WALNEY ISLAND', size: 0.04, type: 'city' }, // EGNL
    { lat: 53.866, lng: -1.661, city: 'LEEDS BRADFORD', size: 0.04, type: 'city' }, // EGNM
    { lat: 53.745, lng: -2.883, city: 'WARTON', size: 0.04, type: 'city' }, // EGNO
    { lat: 53.178, lng: -2.978, city: 'HAWARDEN', size: 0.04, type: 'city' }, // EGNR
    { lat: 54.083, lng: -4.624, city: 'ISLE OF MAN', size: 0.04, type: 'city' }, // EGNS
    { lat: 55.038, lng: -1.692, city: 'NEWCASTLE', size: 0.04, type: 'city' }, // EGNT
    { lat: 54.509, lng: -1.429, city: 'TEESSIDE', size: 0.04, type: 'city' }, // EGNV
    { lat: 52.831, lng: -1.328, city: 'EAST MIDLANDS', size: 0.04, type: 'city' }, // EGNX
    { lat: 52.812, lng: -4.123, city: 'LLANBEDR', size: 0.04, type: 'city' }, // EGOD
    { lat: 52.871, lng: -2.533, city: 'TERNHILL', size: 0.04, type: 'city' }, // EGOE
    { lat: 53.258, lng: -4.373, city: 'MONA', size: 0.04, type: 'city' }, // EGOQ
    { lat: 52.798, lng: -2.668, city: 'SHAWBURY', size: 0.04, type: 'city' }, // EGOS
    { lat: 53.248, lng: -4.535, city: 'VALLEY', size: 0.04, type: 'city' }, // EGOV
    { lat: 53.581, lng: -3.055, city: 'WOODVALE', size: 0.04, type: 'city' }, // EGOW
    { lat: 54.851, lng: -4.948, city: 'WEST FREUGH', size: 0.04, type: 'city' }, // EGOY
    { lat: 58.958, lng: -2.905, city: 'KIRKWALL', size: 0.04, type: 'city' }, // EGPA
    { lat: 59.879, lng: -1.296, city: 'SUMBURGH', size: 0.04, type: 'city' }, // EGPB
    { lat: 58.459, lng: -3.093, city: 'WICK', size: 0.04, type: 'city' }, // EGPC
    { lat: 57.204, lng: -2.2, city: 'DYCE', size: 0.04, type: 'city' }, // EGPD
    { lat: 57.54, lng: -4.05, city: 'INVERNESS', size: 0.04, type: 'city' }, // EGPE
    { lat: 55.872, lng: -4.433, city: 'GLASGOW', size: 0.04, type: 'city' }, // EGPF
    { lat: 55.95, lng: -3.373, city: 'EDINBURGH', size: 0.04, type: 'city' }, // EGPH
    { lat: 55.682, lng: -6.257, city: 'ISLAY', size: 0.04, type: 'city' }, // EGPI
    { lat: 55.508, lng: -4.587, city: 'PRESTWICK', size: 0.04, type: 'city' }, // EGPK
    { lat: 57.481, lng: -7.363, city: 'BENBECULA', size: 0.04, type: 'city' }, // EGPL
    { lat: 60.432, lng: -1.298, city: 'SCATSTA', size: 0.04, type: 'city' }, // EGPM
    { lat: 56.453, lng: -3.026, city: 'DUNDEE', size: 0.04, type: 'city' }, // EGPN
    { lat: 58.214, lng: -6.329, city: 'STORNOWAY', size: 0.04, type: 'city' }, // EGPO
    { lat: 56.499, lng: -6.869, city: 'TIREE', size: 0.04, type: 'city' }, // EGPU
    { lat: 56.373, lng: -2.868, city: 'LEUCHARS', size: 0.04, type: 'city' }, // EGQL
    { lat: 57.705, lng: -3.339, city: 'LOSSIEMOUTH', size: 0.04, type: 'city' }, // EGQS
    { lat: 51.383, lng: -0.783, city: 'BRACKNELL MET CENTER', size: 0.04, type: 'city' }, // EGRR
    { lat: 52.205, lng: 0.175, city: 'CAMBRIDGE', size: 0.04, type: 'city' }, // EGSC
    { lat: 52.468, lng: -0.251, city: 'CONINGTON', size: 0.04, type: 'city' }, // EGSF
    { lat: 52.676, lng: 1.283, city: 'NORWICH', size: 0.04, type: 'city' }, // EGSH
    { lat: 51.885, lng: 0.235, city: 'STANSTED', size: 0.04, type: 'city' }, // EGSS
    { lat: 51.722, lng: 0.154, city: 'NORTH WEALD', size: 0.04, type: 'city' }, // EGSX
    { lat: 53.394, lng: -1.388, city: 'SHEFFIELD CITY', size: 0.04, type: 'city' }, // EGSY
    { lat: 52.072, lng: -0.617, city: 'CRANFIELD', size: 0.04, type: 'city' }, // EGTC
    { lat: 51.117, lng: -0.534, city: 'DUNSFOLD', size: 0.04, type: 'city' }, // EGTD
    { lat: 50.734, lng: -3.414, city: 'EXETER', size: 0.04, type: 'city' }, // EGTE
    { lat: 51.519, lng: -2.591, city: 'BRISTOL FILTON', size: 0.04, type: 'city' }, // EGTG
    { lat: 51.767, lng: 0.25, city: 'HATFIELD', size: 0.04, type: 'city' }, // EGTH
    { lat: 51.837, lng: -1.32, city: 'KIDLINGTON', size: 0.04, type: 'city' }, // EGTK
    { lat: 51.616, lng: -1.096, city: 'BENSON', size: 0.04, type: 'city' }, // EGUB
    { lat: 52.409, lng: 0.561, city: 'LAKENHEATH', size: 0.04, type: 'city' }, // EGUL
    { lat: 52.361, lng: 0.488, city: 'MILDENHALL', size: 0.04, type: 'city' }, // EGUN
    { lat: 52.127, lng: 0.956, city: 'WATTISHAM', size: 0.04, type: 'city' }, // EGUW
    { lat: 52.357, lng: -0.108, city: 'WYTON', size: 0.04, type: 'city' }, // EGUY
    { lat: 51.682, lng: -1.79, city: 'FAIRFORD', size: 0.04, type: 'city' }, // EGVA
    { lat: 51.75, lng: -1.584, city: 'BRIZE NORTON', size: 0.04, type: 'city' }, // EGVN
    { lat: 51.234, lng: -0.943, city: 'ODIHAM', size: 0.04, type: 'city' }, // EGVO
    { lat: 52.64, lng: -2.306, city: 'COSFORD', size: 0.04, type: 'city' }, // EGWC
    { lat: 51.553, lng: -0.418, city: 'NORTHOLT RAF', size: 0.04, type: 'city' }, // EGWU
    { lat: 53.093, lng: -0.166, city: 'CONINGSBY', size: 0.04, type: 'city' }, // EGXC
    { lat: 54.137, lng: -1.42, city: 'DISHFORTH', size: 0.04, type: 'city' }, // EGXD
    { lat: 54.292, lng: -1.535, city: 'LEEMING', size: 0.04, type: 'city' }, // EGXE
    { lat: 53.834, lng: -1.195, city: 'CHURCH FENTON', size: 0.04, type: 'city' }, // EGXG
    { lat: 52.343, lng: 0.773, city: 'HONINGTON', size: 0.04, type: 'city' }, // EGXH
    { lat: 52.736, lng: -0.649, city: 'COTTESMORE', size: 0.04, type: 'city' }, // EGXJ
    { lat: 53.307, lng: -0.551, city: 'SCAMPTON', size: 0.04, type: 'city' }, // EGXP
    { lat: 52.613, lng: -0.476, city: 'WITTERING', size: 0.04, type: 'city' }, // EGXT
    { lat: 54.049, lng: -1.252, city: 'LINTON ON OUSE', size: 0.04, type: 'city' }, // EGXU
    { lat: 53.166, lng: -0.524, city: 'WADDINGTON', size: 0.04, type: 'city' }, // EGXW
    { lat: 54.206, lng: -1.382, city: 'TOPCLIFFE', size: 0.04, type: 'city' }, // EGXZ
    { lat: 52.755, lng: 1.357, city: 'COLTISHALL', size: 0.04, type: 'city' }, // EGYC
    { lat: 53.031, lng: -0.481, city: 'CRANWELL', size: 0.04, type: 'city' }, // EGYD
    { lat: 52.962, lng: -0.561, city: 'BARKSTON HEATH', size: 0.04, type: 'city' }, // EGYE
    { lat: 52.648, lng: 0.55, city: 'MARHAM', size: 0.04, type: 'city' }, // EGYM
    { lat: -51.823, lng: -58.447, city: 'MOUNT PLEASANT', size: 0.04, type: 'city' }, // EGYP
    { lat: 52.309, lng: 4.764, city: 'SCHIPHOL', size: 0.04, type: 'city' }, // EHAM
    { lat: 51.255, lng: 5.601, city: 'BUDEL', size: 0.04, type: 'city' }, // EHBD
    { lat: 50.911, lng: 5.77, city: 'MAASTRICHT', size: 0.04, type: 'city' }, // EHBK
    { lat: 52.061, lng: 5.873, city: 'DEELEN', size: 0.04, type: 'city' }, // EHDL
    { lat: 53.119, lng: 6.13, city: 'DRACHTEN', size: 0.04, type: 'city' }, // EHDR
    { lat: 51.45, lng: 5.374, city: 'EINDHOVEN', size: 0.04, type: 'city' }, // EHEH
    { lat: 53.119, lng: 6.579, city: 'EELDE', size: 0.04, type: 'city' }, // EHGG
    { lat: 51.568, lng: 4.933, city: 'GILZE RIJEN', size: 0.04, type: 'city' }, // EHGR
    { lat: 52.923, lng: 4.781, city: 'DE KOOY', size: 0.04, type: 'city' }, // EHKD
    { lat: 52.46, lng: 5.527, city: 'LELYSTAD', size: 0.04, type: 'city' }, // EHLE
    { lat: 53.229, lng: 5.761, city: 'LEEUWARDEN', size: 0.04, type: 'city' }, // EHLW
    { lat: 51.957, lng: 4.442, city: 'ROTTERDAM', size: 0.04, type: 'city' }, // EHRD
    { lat: 52.127, lng: 5.276, city: 'SOESTERBERG', size: 0.04, type: 'city' }, // EHSB
    { lat: 52.27, lng: 6.874, city: 'TWENTHE', size: 0.04, type: 'city' }, // EHTW
    { lat: 52.17, lng: 4.426, city: 'VALKENBURG', size: 0.04, type: 'city' }, // EHVB
    { lat: 51.449, lng: 4.342, city: 'WOENSDRECHT', size: 0.04, type: 'city' }, // EHWO
    { lat: 51.843, lng: -8.492, city: 'CORK', size: 0.04, type: 'city' }, // EICK
    { lat: 53.301, lng: -8.939, city: 'GALWAY', size: 0.04, type: 'city' }, // EICM
    { lat: 55.044, lng: -8.341, city: 'DONEGAL', size: 0.04, type: 'city' }, // EIDL
    { lat: 53.421, lng: -6.27, city: 'DUBLIN', size: 0.04, type: 'city' }, // EIDW
    { lat: 53.91, lng: -8.818, city: 'CONNAUGHT', size: 0.04, type: 'city' }, // EIKN
    { lat: 52.181, lng: -9.524, city: 'KERRY', size: 0.04, type: 'city' }, // EIKY
    { lat: 53.303, lng: -6.443, city: 'CASEMENT', size: 0.04, type: 'city' }, // EIME
    { lat: 52.702, lng: -8.925, city: 'SHANNON', size: 0.04, type: 'city' }, // EINN
    { lat: 54.28, lng: -8.599, city: 'SLIGO', size: 0.04, type: 'city' }, // EISG
    { lat: 52.187, lng: -7.087, city: 'WATERFORD', size: 0.04, type: 'city' }, // EIWF
    { lat: 56.304, lng: 10.619, city: 'AARHUS', size: 0.04, type: 'city' }, // EKAH
    { lat: 55.74, lng: 9.152, city: 'BILLUND', size: 0.04, type: 'city' }, // EKBI
    { lat: 55.618, lng: 12.656, city: 'KASTRUP', size: 0.04, type: 'city' }, // EKCH
    { lat: 55.526, lng: 8.553, city: 'ESBJERG', size: 0.04, type: 'city' }, // EKEB
    { lat: 55.941, lng: 12.382, city: 'GRONHOLT HILLEROD', size: 0.04, type: 'city' }, // EKGH
    { lat: 56.397, lng: 8.443, city: 'LINDTORP', size: 0.04, type: 'city' }, // EKHO
    { lat: 56.297, lng: 9.124, city: 'KARUP', size: 0.04, type: 'city' }, // EKKA
    { lat: 57.278, lng: 11.001, city: 'LAESO', size: 0.04, type: 'city' }, // EKLS
    { lat: 54.699, lng: 11.44, city: 'LOLLAND FALSTER MARIBO', size: 0.04, type: 'city' }, // EKMB
    { lat: 55.476, lng: 10.329, city: 'ODENSE', size: 0.04, type: 'city' }, // EKOD
    { lat: 54.87, lng: 9.279, city: 'KRUSA PADBORG', size: 0.04, type: 'city' }, // EKPB
    { lat: 55.586, lng: 12.131, city: 'ROSKILDE', size: 0.04, type: 'city' }, // EKRK
    { lat: 55.063, lng: 14.759, city: 'BORNHOLM RONNE', size: 0.04, type: 'city' }, // EKRN
    { lat: 54.964, lng: 9.792, city: 'SONDERBORG', size: 0.04, type: 'city' }, // EKSB
    { lat: 57.503, lng: 10.229, city: 'SINDAL', size: 0.04, type: 'city' }, // EKSN
    { lat: 55.225, lng: 9.264, city: 'SKRYDSTRUP', size: 0.04, type: 'city' }, // EKSP
    { lat: 56.55, lng: 9.173, city: 'SKIVE', size: 0.04, type: 'city' }, // EKSV
    { lat: 57.069, lng: 8.705, city: 'THISTED', size: 0.04, type: 'city' }, // EKTS
    { lat: 55.697, lng: 9.193, city: 'VANDEL', size: 0.04, type: 'city' }, // EKVA
    { lat: 55.436, lng: 9.331, city: 'KOLDING VAMDRUP', size: 0.04, type: 'city' }, // EKVD
    { lat: 62.064, lng: -7.277, city: 'VAGAR', size: 0.04, type: 'city' }, // EKVG
    { lat: 56.847, lng: 9.459, city: 'AARS', size: 0.04, type: 'city' }, // EKVH
    { lat: 55.99, lng: 8.354, city: 'STAUNING', size: 0.04, type: 'city' }, // EKVJ
    { lat: 55.767, lng: 12.343, city: 'VAERLOSE', size: 0.04, type: 'city' }, // EKVL
    { lat: 57.093, lng: 9.849, city: 'AALBORG', size: 0.04, type: 'city' }, // EKYT
    { lat: 49.626, lng: 6.211, city: 'FINDEL INTERNATIONAL AIRPORT', size: 0.04, type: 'city' }, // ELLX
    { lat: 62.56, lng: 6.11, city: 'VIGRA', size: 0.04, type: 'city' }, // ENAL
    { lat: 69.293, lng: 16.144, city: 'ANDOYA', size: 0.04, type: 'city' }, // ENAN
    { lat: 69.977, lng: 23.366, city: 'ALTA', size: 0.04, type: 'city' }, // ENAT
    { lat: 61.392, lng: 5.764, city: 'BRINGELAND', size: 0.04, type: 'city' }, // ENBL
    { lat: 60.639, lng: 6.501, city: 'BOEMOEN', size: 0.04, type: 'city' }, // ENBM
    { lat: 65.459, lng: 12.214, city: 'BRONNOY', size: 0.04, type: 'city' }, // ENBN
    { lat: 67.269, lng: 14.363, city: 'BODO', size: 0.04, type: 'city' }, // ENBO
    { lat: 60.293, lng: 5.218, city: 'BERGEN FLESLAND', size: 0.04, type: 'city' }, // ENBR
    { lat: 70.6, lng: 29.692, city: 'BATSFJORD', size: 0.04, type: 'city' }, // ENBS
    { lat: 58.204, lng: 8.085, city: 'KRISTIANSAND KJEVIK', size: 0.04, type: 'city' }, // ENCN
    { lat: 60.417, lng: 8.514, city: 'DAGALI', size: 0.04, type: 'city' }, // ENDI
    { lat: 69.056, lng: 18.54, city: 'BARDUFOSS', size: 0.04, type: 'city' }, // ENDU
    { lat: 68.491, lng: 16.678, city: 'EVENES', size: 0.04, type: 'city' }, // ENEV
    { lat: 59.896, lng: 10.617, city: 'OSLO FORNEBU', size: 0.04, type: 'city' }, // ENFB
    { lat: 61.011, lng: 9.293, city: 'FAGERNES LEIRIN', size: 0.04, type: 'city' }, // ENFG
    { lat: 61.584, lng: 5.025, city: 'FLORO', size: 0.04, type: 'city' }, // ENFL
    { lat: 60.194, lng: 11.1, city: 'OSLO GARDERMOEN', size: 0.04, type: 'city' }, // ENGM
    { lat: 60.818, lng: 11.067, city: 'STAFSBERG', size: 0.04, type: 'city' }, // ENHA
    { lat: 59.345, lng: 5.208, city: 'HAUGESUND KARMOY', size: 0.04, type: 'city' }, // ENHD
    { lat: 70.487, lng: 22.14, city: 'HASVIK', size: 0.04, type: 'city' }, // ENHK
    { lat: 63.112, lng: 7.824, city: 'KRISTIANSUND KVERNBERGET', size: 0.04, type: 'city' }, // ENKB
    { lat: 59.969, lng: 11.036, city: 'KJELLER', size: 0.04, type: 'city' }, // ENKJ
    { lat: 69.725, lng: 29.887, city: 'KIRKENES HOYBUKTMOEN', size: 0.04, type: 'city' }, // ENKR
    { lat: 58.1, lng: 6.625, city: 'LISTA', size: 0.04, type: 'city' }, // ENLI
    { lat: 62.746, lng: 7.272, city: 'ARO', size: 0.04, type: 'city' }, // ENML
    { lat: 65.784, lng: 13.215, city: 'KJAERSTAD', size: 0.04, type: 'city' }, // ENMS
    { lat: 70.069, lng: 24.973, city: 'BANAK', size: 0.04, type: 'city' }, // ENNA
    { lat: 59.566, lng: 9.212, city: 'NOTODDEN', size: 0.04, type: 'city' }, // ENNO
    { lat: 63.699, lng: 9.604, city: 'ORLAND', size: 0.04, type: 'city' }, // ENOL
    { lat: 62.578, lng: 11.342, city: 'ROEROS', size: 0.04, type: 'city' }, // ENRO
    { lat: 59.379, lng: 10.786, city: 'RYGGE', size: 0.04, type: 'city' }, // ENRY
    { lat: 78.246, lng: 15.466, city: 'SVALBARD LONGYEAR', size: 0.04, type: 'city' }, // ENSB
    { lat: 61.156, lng: 7.136, city: 'SOGNDAL HAUKASEN', size: 0.04, type: 'city' }, // ENSG
    { lat: 59.185, lng: 9.567, city: 'SKIEN GEITERYGGEN', size: 0.04, type: 'city' }, // ENSN
    { lat: 59.792, lng: 5.341, city: 'SOERSTOKKEN', size: 0.04, type: 'city' }, // ENSO
    { lat: 69.787, lng: 20.959, city: 'SORKJOSEN', size: 0.04, type: 'city' }, // ENSR
    { lat: 70.355, lng: 31.045, city: 'SVARTNES', size: 0.04, type: 'city' }, // ENSS
    { lat: 65.957, lng: 12.469, city: 'STOKKA', size: 0.04, type: 'city' }, // ENST
    { lat: 69.683, lng: 18.919, city: 'TROMSO', size: 0.04, type: 'city' }, // ENTC
    { lat: 59.187, lng: 10.259, city: 'TORP', size: 0.04, type: 'city' }, // ENTO
    { lat: 63.458, lng: 10.94, city: 'TRONDHEIM VAERNES', size: 0.04, type: 'city' }, // ENVA
    { lat: 58.877, lng: 5.638, city: 'STAVANGER SOLA', size: 0.04, type: 'city' }, // ENZV
    { lat: 54.377, lng: 18.466, city: 'REBIECHOWO', size: 0.04, type: 'city' }, // EPGD
    { lat: 50.078, lng: 19.785, city: 'BALICE JP II INTERNATIONAL AIRPORT', size: 0.04, type: 'city' }, // EPKK
    { lat: 50.238, lng: 19.035, city: 'MUCHOWIEC', size: 0.04, type: 'city' }, // EPKM
    { lat: 54.042, lng: 16.264, city: 'ZEGRZE POMORSKIE', size: 0.04, type: 'city' }, // EPKO
    { lat: 50.474, lng: 19.08, city: 'PYRZOWICE', size: 0.04, type: 'city' }, // EPKT
    { lat: 51.722, lng: 19.398, city: 'LUBLINEK', size: 0.04, type: 'city' }, // EPLL
    { lat: 50.322, lng: 21.462, city: 'MIELEC', size: 0.04, type: 'city' }, // EPML
    { lat: 52.421, lng: 16.826, city: 'LAWICA', size: 0.04, type: 'city' }, // EPPO
    { lat: 50.11, lng: 22.019, city: 'JASIONKA', size: 0.04, type: 'city' }, // EPRZ
    { lat: 53.585, lng: 14.902, city: 'GOLENIOW', size: 0.04, type: 'city' }, // EPSC
    { lat: 53.392, lng: 14.634, city: 'DABIE', size: 0.04, type: 'city' }, // EPSD
    { lat: 54.479, lng: 17.108, city: 'REDZIKOWO', size: 0.04, type: 'city' }, // EPSK
    { lat: 53.791, lng: 15.828, city: 'SWIDWIN', size: 0.04, type: 'city' }, // EPSN
    { lat: 52.166, lng: 20.967, city: 'OKECIE', size: 0.04, type: 'city' }, // EPWA
    { lat: 51.102, lng: 16.886, city: 'STRACHOWICE', size: 0.04, type: 'city' }, // EPWR
    { lat: 52.139, lng: 15.799, city: 'BABIMOST', size: 0.04, type: 'city' }, // EPZG
    { lat: 58.402, lng: 15.526, city: 'MALMEN', size: 0.04, type: 'city' }, // ESCF
    { lat: 58.611, lng: 16.103, city: 'BRAVALLA', size: 0.04, type: 'city' }, // ESCK
    { lat: 59.897, lng: 17.588, city: 'UPPSALA', size: 0.04, type: 'city' }, // ESCM
    { lat: 59.181, lng: 17.912, city: 'TULLINGE', size: 0.04, type: 'city' }, // ESCN
    { lat: 56.296, lng: 12.847, city: 'ANGELHOLM', size: 0.04, type: 'city' }, // ESDB
    { lat: 56.267, lng: 15.265, city: 'RONNEBY', size: 0.04, type: 'city' }, // ESDF
    { lat: 58.409, lng: 13.262, city: 'HASSLOSA', size: 0.04, type: 'city' }, // ESFH
    { lat: 56.184, lng: 14.132, city: 'KNISLINGE', size: 0.04, type: 'city' }, // ESFI
    { lat: 58.598, lng: 14.114, city: 'MOHOLM', size: 0.04, type: 'city' }, // ESFM
    { lat: 56.844, lng: 15.452, city: 'KOSTA', size: 0.04, type: 'city' }, // ESFQ
    { lat: 58.498, lng: 13.053, city: 'RADA', size: 0.04, type: 'city' }, // ESFR
    { lat: 56.785, lng: 13.602, city: 'BYHOLMA', size: 0.04, type: 'city' }, // ESFY
    { lat: 57.663, lng: 12.28, city: 'LANDVETTER', size: 0.04, type: 'city' }, // ESGG
    { lat: 57.758, lng: 14.069, city: 'JONKOPING', size: 0.04, type: 'city' }, // ESGJ
    { lat: 58.17, lng: 13.588, city: 'FALKOPING', size: 0.04, type: 'city' }, // ESGK
    { lat: 58.465, lng: 13.174, city: 'LIDKOPING', size: 0.04, type: 'city' }, // ESGL
    { lat: 57.775, lng: 11.87, city: 'SAVE', size: 0.04, type: 'city' }, // ESGP
    { lat: 58.456, lng: 13.973, city: 'SKOVDE', size: 0.04, type: 'city' }, // ESGR
    { lat: 58.318, lng: 12.345, city: 'TROLLHATTAN VANERSBORG', size: 0.04, type: 'city' }, // ESGT
    { lat: 58.514, lng: 14.507, city: 'KARLSBORG', size: 0.04, type: 'city' }, // ESIA
    { lat: 58.426, lng: 12.714, city: 'SATENAS', size: 0.04, type: 'city' }, // ESIB
    { lat: 60.133, lng: 18.105, city: 'GIMO', size: 0.04, type: 'city' }, // ESKA
    { lat: 59.419, lng: 17.891, city: 'BARKARBY', size: 0.04, type: 'city' }, // ESKB
    { lat: 59.346, lng: 14.496, city: 'KARLSKOGA', size: 0.04, type: 'city' }, // ESKK
    { lat: 60.958, lng: 14.511, city: 'MORA', size: 0.04, type: 'city' }, // ESKM
    { lat: 58.789, lng: 16.912, city: 'SKAVSTA', size: 0.04, type: 'city' }, // ESKN
    { lat: 59.314, lng: 17.109, city: 'STRANGNAS', size: 0.04, type: 'city' }, // ESKS
    { lat: 59.676, lng: 12.639, city: 'ARVIKA', size: 0.04, type: 'city' }, // ESKV
    { lat: 58.791, lng: 16.571, city: 'BJORKVIK', size: 0.04, type: 'city' }, // ESKX
    { lat: 56.611, lng: 15.605, city: 'EMMABODA', size: 0.04, type: 'city' }, // ESMA
    { lat: 56.95, lng: 13.922, city: 'FERINGE', size: 0.04, type: 'city' }, // ESMG
    { lat: 55.922, lng: 14.085, city: 'KRISTIANSTAD', size: 0.04, type: 'city' }, // ESMK
    { lat: 55.945, lng: 12.861, city: 'LANDSKRONA', size: 0.04, type: 'city' }, // ESML
    { lat: 57.35, lng: 16.498, city: 'OSKARSHAMN', size: 0.04, type: 'city' }, // ESMO
    { lat: 57.264, lng: 13.599, city: 'ANDERSTORP', size: 0.04, type: 'city' }, // ESMP
    { lat: 56.685, lng: 16.288, city: 'KALMAR', size: 0.04, type: 'city' }, // ESMQ
    { lat: 55.53, lng: 13.371, city: 'STURUP', size: 0.04, type: 'city' }, // ESMS
    { lat: 56.691, lng: 12.82, city: 'HALMSTAD', size: 0.04, type: 'city' }, // ESMT
    { lat: 57.292, lng: 14.137, city: 'HAGSHULT', size: 0.04, type: 'city' }, // ESMV
    { lat: 56.929, lng: 14.728, city: 'KRONOBERG', size: 0.04, type: 'city' }, // ESMX
    { lat: 63.738, lng: 15.458, city: 'HALLVIKEN', size: 0.04, type: 'city' }, // ESNA
    { lat: 62.409, lng: 13.747, city: 'HEDLANDA', size: 0.04, type: 'city' }, // ESNC
    { lat: 62.048, lng: 14.423, city: 'SVEG', size: 0.04, type: 'city' }, // ESND
    { lat: 61.898, lng: 15.705, city: 'FARILA', size: 0.04, type: 'city' }, // ESNF
    { lat: 67.132, lng: 20.814, city: 'GALLIVARE', size: 0.04, type: 'city' }, // ESNG
    { lat: 61.768, lng: 17.081, city: 'HUDIKSVALL', size: 0.04, type: 'city' }, // ESNH
    { lat: 63.634, lng: 17.94, city: 'KUBBE', size: 0.04, type: 'city' }, // ESNI
    { lat: 66.496, lng: 20.147, city: 'JOKKMOKK', size: 0.04, type: 'city' }, // ESNJ
    { lat: 63.048, lng: 17.769, city: 'KRAMFORS SOLLEFTEA', size: 0.04, type: 'city' }, // ESNK
    { lat: 64.548, lng: 18.716, city: 'LYCKSELE', size: 0.04, type: 'city' }, // ESNL
    { lat: 63.129, lng: 14.803, city: 'OPTAND', size: 0.04, type: 'city' }, // ESNM
    { lat: 62.528, lng: 17.444, city: 'SUNDSVALL HARNOSAND', size: 0.04, type: 'city' }, // ESNN
    { lat: 63.408, lng: 18.99, city: 'ORNSKOLDSVIK', size: 0.04, type: 'city' }, // ESNO
    { lat: 65.399, lng: 21.265, city: 'PITEA', size: 0.04, type: 'city' }, // ESNP
    { lat: 67.822, lng: 20.337, city: 'KIRUNA', size: 0.04, type: 'city' }, // ESNQ
    { lat: 61.19, lng: 14.712, city: 'ORSA', size: 0.04, type: 'city' }, // ESNR
    { lat: 64.625, lng: 21.077, city: 'SKELLEFTEA', size: 0.04, type: 'city' }, // ESNS
    { lat: 62.481, lng: 17.003, city: 'SATTNA', size: 0.04, type: 'city' }, // ESNT
    { lat: 63.792, lng: 20.282, city: 'UMEA', size: 0.04, type: 'city' }, // ESNU
    { lat: 64.579, lng: 16.833, city: 'VILHELMINA', size: 0.04, type: 'city' }, // ESNV
    { lat: 65.59, lng: 19.282, city: 'ARVIDSJAUR', size: 0.04, type: 'city' }, // ESNX
    { lat: 59.224, lng: 15.038, city: 'OREBRO', size: 0.04, type: 'city' }, // ESOE
    { lat: 60.02, lng: 13.579, city: 'HAGFORS', size: 0.04, type: 'city' }, // ESOH
    { lat: 59.589, lng: 16.634, city: 'VASTERAS', size: 0.04, type: 'city' }, // ESOW
    { lat: 65.544, lng: 22.122, city: 'KALLAX', size: 0.04, type: 'city' }, // ESPA
    { lat: 63.194, lng: 14.502, city: 'FROSON', size: 0.04, type: 'city' }, // ESPC
    { lat: 65.875, lng: 20.15, city: 'VIDSEL', size: 0.04, type: 'city' }, // ESPE
    { lat: 65.836, lng: 21.471, city: 'HEDEN', size: 0.04, type: 'city' }, // ESPJ
    { lat: 59.386, lng: 15.924, city: 'ARBOGA', size: 0.04, type: 'city' }, // ESQO
    { lat: 59.652, lng: 17.919, city: 'ARLANDA', size: 0.04, type: 'city' }, // ESSA
    { lat: 59.354, lng: 17.941, city: 'BROMMA', size: 0.04, type: 'city' }, // ESSB
    { lat: 60.422, lng: 15.515, city: 'BORLANGE', size: 0.04, type: 'city' }, // ESSD
    { lat: 57.526, lng: 15.824, city: 'HULTSFRED', size: 0.04, type: 'city' }, // ESSF
    { lat: 60.593, lng: 16.951, city: 'GAVLE SANDVIKEN', size: 0.04, type: 'city' }, // ESSK
    { lat: 58.406, lng: 15.68, city: 'SAAB', size: 0.04, type: 'city' }, // ESSL
    { lat: 58.586, lng: 16.251, city: 'KUNGSANGEN', size: 0.04, type: 'city' }, // ESSP
    { lat: 60.157, lng: 12.991, city: 'TORSBY', size: 0.04, type: 'city' }, // ESST
    { lat: 59.351, lng: 16.708, city: 'ESKILSTUNA', size: 0.04, type: 'city' }, // ESSU
    { lat: 57.663, lng: 18.346, city: 'VISBY', size: 0.04, type: 'city' }, // ESSV
    { lat: 64.571, lng: 19.314, city: 'AMSELE', size: 0.04, type: 'city' }, // ESUA
    { lat: 64.961, lng: 17.696, city: 'STORUMAN', size: 0.04, type: 'city' }, // ESUD
    { lat: 61.869, lng: 12.691, city: 'IDRE', size: 0.04, type: 'city' }, // ESUE
    { lat: 65.106, lng: 20.761, city: 'FALLFORS', size: 0.04, type: 'city' }, // ESUF
    { lat: 67.765, lng: 20.257, city: 'KALIXFORS', size: 0.04, type: 'city' }, // ESUK
    { lat: 65.806, lng: 15.083, city: 'HEMAVAN', size: 0.04, type: 'city' }, // ESUT
    { lat: 49.973, lng: 6.692, city: 'SPANGDAHLEM AB', size: 0.04, type: 'city' }, // ETAD
    { lat: 49.438, lng: 7.601, city: 'RAMSTEIN AB', size: 0.04, type: 'city' }, // ETAR
    { lat: 49.92, lng: 10.914, city: 'BAMBERG AAF', size: 0.04, type: 'city' }, // ETEJ
    { lat: 49.65, lng: 7.3, city: 'BAUMHOLDER AAF', size: 0.04, type: 'city' }, // ETEK
    { lat: 49.648, lng: 9.966, city: 'GIEBELSTADT AAF', size: 0.04, type: 'city' }, // ETEU
    { lat: 52.278, lng: 9.082, city: 'BUCKEBURG', size: 0.04, type: 'city' }, // ETHB
    { lat: 52.591, lng: 10.022, city: 'CELLE', size: 0.04, type: 'city' }, // ETHC
    { lat: 52.291, lng: 7.387, city: 'RHEINE BENTLAGE', size: 0.04, type: 'city' }, // ETHE
    { lat: 51.114, lng: 9.286, city: 'FRITZLAR', size: 0.04, type: 'city' }, // ETHF
    { lat: 53.994, lng: 9.578, city: 'ITZEHOE HUNGRIGER WOLF', size: 0.04, type: 'city' }, // ETHI
    { lat: 48.22, lng: 9.91, city: 'LAUPHEIM', size: 0.04, type: 'city' }, // ETHL
    { lat: 50.366, lng: 7.315, city: 'MENDIG', size: 0.04, type: 'city' }, // ETHM
    { lat: 49.392, lng: 9.958, city: 'NIEDERSTETTEN', size: 0.04, type: 'city' }, // ETHN
    { lat: 49.218, lng: 11.101, city: 'ROTH', size: 0.04, type: 'city' }, // ETHR
    { lat: 52.919, lng: 10.184, city: 'FASSBERG', size: 0.04, type: 'city' }, // ETHS
    { lat: 51.768, lng: 14.292, city: 'COTTBUS', size: 0.04, type: 'city' }, // ETHT
    { lat: 49.699, lng: 11.941, city: 'GRAFENWOHR AAF', size: 0.04, type: 'city' }, // ETIC
    { lat: 50.169, lng: 8.961, city: 'HANAU AAF', size: 0.04, type: 'city' }, // ETID
    { lat: 49.393, lng: 8.652, city: 'HEIDELBERG AAF', size: 0.04, type: 'city' }, // ETIE
    { lat: 49.218, lng: 11.836, city: 'HOHENFELS AAF', size: 0.04, type: 'city' }, // ETIH
    { lat: 49.743, lng: 10.201, city: 'KITZINGEN AAF', size: 0.04, type: 'city' }, // ETIN
    { lat: 54.625, lng: 9.341, city: 'EGGEBEK', size: 0.04, type: 'city' }, // ETME
    { lat: 53.767, lng: 8.658, city: 'NORDHOLZ', size: 0.04, type: 'city' }, // ETMN
    { lat: 52.585, lng: 8.341, city: 'DIEPHOLZ', size: 0.04, type: 'city' }, // ETND
    { lat: 50.961, lng: 6.042, city: 'GEILENKIRCHEN', size: 0.04, type: 'city' }, // ETNG
    { lat: 54.312, lng: 9.538, city: 'HOHN', size: 0.04, type: 'city' }, // ETNH
    { lat: 53.533, lng: 7.889, city: 'JEVER', size: 0.04, type: 'city' }, // ETNJ
    { lat: 53.918, lng: 12.279, city: 'LAAGE', size: 0.04, type: 'city' }, // ETNL
    { lat: 50.831, lng: 6.658, city: 'NORVENICH', size: 0.04, type: 'city' }, // ETNN
    { lat: 52.339, lng: 7.541, city: 'HOPSTEN', size: 0.04, type: 'city' }, // ETNP
    { lat: 51.664, lng: 14.634, city: 'PRESCHEN', size: 0.04, type: 'city' }, // ETNR
    { lat: 54.459, lng: 9.516, city: 'SCHLESWIG', size: 0.04, type: 'city' }, // ETNS
    { lat: 53.548, lng: 7.667, city: 'WITTMUNDHAFEN', size: 0.04, type: 'city' }, // ETNT
    { lat: 53.602, lng: 13.306, city: 'NEUBRANDENBURG', size: 0.04, type: 'city' }, // ETNU
    { lat: 52.457, lng: 9.427, city: 'WUNSTORF', size: 0.04, type: 'city' }, // ETNW
    { lat: 49.634, lng: 11.767, city: 'VILSECK AAF', size: 0.04, type: 'city' }, // ETOI
    { lat: 49.563, lng: 8.463, city: 'COLEMAN AAF', size: 0.04, type: 'city' }, // ETOR
    { lat: 50.05, lng: 8.325, city: 'WIESBADEN AAF', size: 0.04, type: 'city' }, // ETOU
    { lat: 48.071, lng: 10.906, city: 'LANDSBERG LECH', size: 0.04, type: 'city' }, // ETSA
    { lat: 50.174, lng: 7.063, city: 'BUCHEL', size: 0.04, type: 'city' }, // ETSB
    { lat: 48.322, lng: 11.949, city: 'ERDING', size: 0.04, type: 'city' }, // ETSE
    { lat: 48.206, lng: 11.267, city: 'FURSTENFELDBRUCK', size: 0.04, type: 'city' }, // ETSF
    { lat: 51.768, lng: 13.167, city: 'HOLZDORF', size: 0.04, type: 'city' }, // ETSH
    { lat: 48.716, lng: 11.534, city: 'INGOLSTADT MANCHING', size: 0.04, type: 'city' }, // ETSI
    { lat: 48.186, lng: 10.862, city: 'LECHFELD', size: 0.04, type: 'city' }, // ETSL
    { lat: 47.989, lng: 10.239, city: 'MEMMINGEN', size: 0.04, type: 'city' }, // ETSM
    { lat: 48.711, lng: 11.211, city: 'NEUBURG', size: 0.04, type: 'city' }, // ETSN
    { lat: 51.602, lng: 6.143, city: 'LAARBRUCH', size: 0.04, type: 'city' }, // ETUL
    { lat: 51.923, lng: 8.306, city: 'GUTERSLOH', size: 0.04, type: 'city' }, // ETUO
    { lat: 51.2, lng: 6.132, city: 'BRUGGEN', size: 0.04, type: 'city' }, // ETUR
    { lat: -28.575, lng: 16.533, city: 'ALEXANDER BAY', size: 0.04, type: 'city' }, // FAAB
    { lat: -29.282, lng: 18.814, city: 'AGGENEYS', size: 0.04, type: 'city' }, // FAAG
    { lat: -25.944, lng: 29.81, city: 'ARNOT POWER STATION', size: 0.04, type: 'city' }, // FAAP
    { lat: -26.239, lng: 28.302, city: 'BRAKPAN', size: 0.04, type: 'city' }, // FABB
    { lat: -32.897, lng: 27.279, city: 'BISHO', size: 0.04, type: 'city' }, // FABE
    { lat: -29.092, lng: 26.302, city: 'BLOEMFONTEIN', size: 0.04, type: 'city' }, // FABL
    { lat: -28.248, lng: 28.336, city: 'BETHLEHEM', size: 0.04, type: 'city' }, // FABM
    { lat: -27.367, lng: 26.629, city: 'BOTHAVILLE', size: 0.04, type: 'city' }, // FABO
    { lat: -26.369, lng: 27.35, city: 'CARLETONVILLE', size: 0.04, type: 'city' }, // FACR
    { lat: -33.965, lng: 18.602, city: 'CAPE TOWN INTERNATIONAL', size: 0.04, type: 'city' }, // FACT
    { lat: -31.5, lng: 19.726, city: 'CALVINIA', size: 0.04, type: 'city' }, // FACV
    { lat: -30.637, lng: 23.92, city: 'DE AAR MILITARY', size: 0.04, type: 'city' }, // FADA
    { lat: -24.805, lng: 26.832, city: 'DWAALBOOM', size: 0.04, type: 'city' }, // FADB
    { lat: -28.183, lng: 30.224, city: 'DUNDEE', size: 0.04, type: 'city' }, // FADD
    { lat: -29.97, lng: 30.95, city: 'DURBAN INTERNATIONAL', size: 0.04, type: 'city' }, // FADN
    { lat: -33.036, lng: 27.826, city: 'EAST LONDON', size: 0.04, type: 'city' }, // FAEL
    { lat: -26.495, lng: 29.98, city: 'ERMELO', size: 0.04, type: 'city' }, // FAEO
    { lat: -23.726, lng: 27.688, city: 'ELLISRAS', size: 0.04, type: 'city' }, // FAER
    { lat: -28.823, lng: 27.909, city: 'FICKSBURG SENTRAOES', size: 0.04, type: 'city' }, // FAFB
    { lat: -25.986, lng: 28.14, city: 'GRAND CENTRAL', size: 0.04, type: 'city' }, // FAGC
    { lat: -34.005, lng: 22.379, city: 'GEORGE', size: 0.04, type: 'city' }, // FAGG
    { lat: -23.284, lng: 30.65, city: 'GIYANI', size: 0.04, type: 'city' }, // FAGI
    { lat: -26.242, lng: 28.151, city: 'RAND', size: 0.04, type: 'city' }, // FAGM
    { lat: -33.285, lng: 26.498, city: 'GRAHAMSTOWN', size: 0.04, type: 'city' }, // FAGT
    { lat: -29.122, lng: 30.587, city: 'GREYTOWN', size: 0.04, type: 'city' }, // FAGY
    { lat: -28.079, lng: 26.861, city: 'HARMONY', size: 0.04, type: 'city' }, // FAHA
    { lat: -25.979, lng: 29.619, city: 'HENDRINA', size: 0.04, type: 'city' }, // FAHE
    { lat: -26.506, lng: 28.394, city: 'HEIDELBERG', size: 0.04, type: 'city' }, // FAHG
    { lat: -27.278, lng: 27.996, city: 'HEILBRON', size: 0.04, type: 'city' }, // FAHO
    { lat: -28.235, lng: 29.106, city: 'HARRISMITH', size: 0.04, type: 'city' }, // FAHR
    { lat: -24.369, lng: 31.049, city: 'HOEDSPRUIT AFS', size: 0.04, type: 'city' }, // FAHS
    { lat: -30.562, lng: 25.528, city: 'GARIEP DAM', size: 0.04, type: 'city' }, // FAHV
    { lat: -26.139, lng: 28.246, city: 'JOHANNESBURG INTERNATIONAL', size: 0.04, type: 'city' }, // FAJS
    { lat: -26.871, lng: 26.718, city: 'KLERKSDORP', size: 0.04, type: 'city' }, // FAKD
    { lat: -26.093, lng: 29.455, city: 'KOMATI POWER STATION', size: 0.04, type: 'city' }, // FAKG
    { lat: -26.252, lng: 29.194, city: 'KRIEL', size: 0.04, type: 'city' }, // FAKL
    { lat: -28.803, lng: 24.765, city: 'KIMBERLEY', size: 0.04, type: 'city' }, // FAKM
    { lat: -25.441, lng: 31.93, city: 'KOMATIPOORT', size: 0.04, type: 'city' }, // FAKP
    { lat: -26.081, lng: 27.726, city: 'KRUGERSDORP', size: 0.04, type: 'city' }, // FAKR
    { lat: -27.661, lng: 27.316, city: 'KROONSTAD', size: 0.04, type: 'city' }, // FAKS
    { lat: -27.457, lng: 23.411, city: 'JOHAN PIENAAR', size: 0.04, type: 'city' }, // FAKU
    { lat: -29.688, lng: 17.094, city: 'KLEINSEE', size: 0.04, type: 'city' }, // FAKZ
    { lat: -25.938, lng: 27.926, city: 'LANSERIA', size: 0.04, type: 'city' }, // FALA
    { lat: -29.181, lng: 27.453, city: 'LADYBRAND', size: 0.04, type: 'city' }, // FALB
    { lat: -26.176, lng: 26.184, city: 'LICHTENBURG', size: 0.04, type: 'city' }, // FALI
    { lat: -23.16, lng: 29.696, city: 'LOUIS TRICHARDT AFB', size: 0.04, type: 'city' }, // FALT
    { lat: -32.969, lng: 18.16, city: 'LANGEBAANWEG', size: 0.04, type: 'city' }, // FALW
    { lat: -28.582, lng: 29.75, city: 'LADYSMITH', size: 0.04, type: 'city' }, // FALY
    { lat: -25.685, lng: 29.44, city: 'MIDDELBURG', size: 0.04, type: 'city' }, // FAMB
    { lat: -30.857, lng: 30.343, city: 'MARGATE', size: 0.04, type: 'city' }, // FAMG
    { lat: -24.989, lng: 29.283, city: 'MARBLE HALL', size: 0.04, type: 'city' }, // FAMI
    { lat: -27.079, lng: 29.778, city: 'MAJUBA POWER STATION', size: 0.04, type: 'city' }, // FAMJ
    { lat: -25.753, lng: 25.612, city: 'MAFIKENG NORTH', size: 0.04, type: 'city' }, // FAMK
    { lat: -25.798, lng: 25.548, city: 'MAFIKENG', size: 0.04, type: 'city' }, // FAMM
    { lat: -25.473, lng: 31.566, city: 'MALELANE', size: 0.04, type: 'city' }, // FAMN
    { lat: -22.356, lng: 29.986, city: 'MESSINA', size: 0.04, type: 'city' }, // FAMS
    { lat: -27.626, lng: 32.044, city: 'MKUZI', size: 0.04, type: 'city' }, // FAMU
    { lat: -27.771, lng: 29.977, city: 'NEWCASTLE', size: 0.04, type: 'city' }, // FANC
    { lat: -25.501, lng: 30.913, city: 'NELSPRUIT', size: 0.04, type: 'city' }, // FANS
    { lat: -24.686, lng: 28.435, city: 'NYLSTROOM', size: 0.04, type: 'city' }, // FANY
    { lat: -34.555, lng: 20.25, city: 'OVERBERG', size: 0.04, type: 'city' }, // FAOB
    { lat: -33.607, lng: 22.189, city: 'OUDTSHOORN', size: 0.04, type: 'city' }, // FAOH
    { lat: -23.845, lng: 29.459, city: 'PIETERSBURG INTERNATIONAL', size: 0.04, type: 'city' }, // FAPB
    { lat: -33.985, lng: 25.617, city: 'PORT ELIZABETH', size: 0.04, type: 'city' }, // FAPE
    { lat: -34.09, lng: 23.328, city: 'PLETTENBERG BAY', size: 0.04, type: 'city' }, // FAPG
    { lat: -23.937, lng: 31.155, city: 'PHALABORWA', size: 0.04, type: 'city' }, // FAPH
    { lat: -23.926, lng: 29.484, city: 'PIETERSBURG MUNI', size: 0.04, type: 'city' }, // FAPI
    { lat: -31.606, lng: 29.52, city: 'PORT ST JOHNS', size: 0.04, type: 'city' }, // FAPJ
    { lat: -29.649, lng: 30.399, city: 'PIETERMARITZBURG', size: 0.04, type: 'city' }, // FAPM
    { lat: -25.334, lng: 27.173, city: 'PILANESBERG', size: 0.04, type: 'city' }, // FAPN
    { lat: -24.23, lng: 28.984, city: 'POTGIETERSRUS', size: 0.04, type: 'city' }, // FAPP
    { lat: -25.847, lng: 23.538, city: 'POMFRET', size: 0.04, type: 'city' }, // FAPQ
    { lat: -26.671, lng: 27.082, city: 'POTCHEFSTROOM', size: 0.04, type: 'city' }, // FAPS
    { lat: -26.889, lng: 27.503, city: 'PARYS', size: 0.04, type: 'city' }, // FAPY
    { lat: -31.92, lng: 26.882, city: 'QUEENSTOWN', size: 0.04, type: 'city' }, // FAQT
    { lat: -28.741, lng: 32.092, city: 'RICHARDS BAY', size: 0.04, type: 'city' }, // FARB
    { lat: -25.644, lng: 27.271, city: 'RUSTENBURG', size: 0.04, type: 'city' }, // FARG
    { lat: -33.812, lng: 19.903, city: 'ROBERTSON', size: 0.04, type: 'city' }, // FARS
    { lat: -29.689, lng: 17.939, city: 'SPRINGBOK', size: 0.04, type: 'city' }, // FASB
    { lat: -26.524, lng: 29.17, city: 'SECUNDA', size: 0.04, type: 'city' }, // FASC
    { lat: -32.964, lng: 17.969, city: 'SALDANHA VREDENBURG', size: 0.04, type: 'city' }, // FASD
    { lat: -26.248, lng: 28.398, city: 'SPRINGS', size: 0.04, type: 'city' }, // FASI
    { lat: -25.809, lng: 28.164, city: 'SWARTKOP', size: 0.04, type: 'city' }, // FASK
    { lat: -27.648, lng: 22.999, city: 'SISHEN', size: 0.04, type: 'city' }, // FASS
    { lat: -25.961, lng: 29.209, city: 'SACE', size: 0.04, type: 'city' }, // FASU
    { lat: -24.961, lng: 31.589, city: 'SKUKUZA', size: 0.04, type: 'city' }, // FASZ
    { lat: -28.26, lng: 22.993, city: 'TOMMYS FLD', size: 0.04, type: 'city' }, // FATF
    { lat: -23.079, lng: 30.383, city: 'P R MPHEPHU', size: 0.04, type: 'city' }, // FATH
    { lat: -29.319, lng: 26.823, city: 'THABA NCHU', size: 0.04, type: 'city' }, // FATN
    { lat: -29.033, lng: 26.157, city: 'NEW TEMPE', size: 0.04, type: 'city' }, // FATP
    { lat: -26.776, lng: 29.339, city: 'TUTUKA POWER STATION', size: 0.04, type: 'city' }, // FATT
    { lat: -23.824, lng: 30.329, city: 'TZANEEN', size: 0.04, type: 'city' }, // FATZ
    { lat: -28.321, lng: 31.416, city: 'PRINCE MANGOSUTHU BUTHELEZI', size: 0.04, type: 'city' }, // FAUL
    { lat: -28.401, lng: 21.261, city: 'UPINGTON', size: 0.04, type: 'city' }, // FAUP
    { lat: -31.548, lng: 28.674, city: 'UMTATA', size: 0.04, type: 'city' }, // FAUT
    { lat: -26.982, lng: 24.729, city: 'VRYBURG', size: 0.04, type: 'city' }, // FAVB
    { lat: -29.771, lng: 31.058, city: 'VIRGINIA', size: 0.04, type: 'city' }, // FAVG
    { lat: -26.692, lng: 27.778, city: 'VANDERBIJLPARK', size: 0.04, type: 'city' }, // FAVP
    { lat: -31.641, lng: 18.545, city: 'VREDENDAL', size: 0.04, type: 'city' }, // FAVR
    { lat: -26.566, lng: 27.961, city: 'VEREENIGING', size: 0.04, type: 'city' }, // FAVV
    { lat: -27.787, lng: 30.795, city: 'VRYHEID', size: 0.04, type: 'city' }, // FAVY
    { lat: -25.654, lng: 28.224, city: 'WONDERBOOM', size: 0.04, type: 'city' }, // FAWB
    { lat: -25.832, lng: 29.192, city: 'WITBANK', size: 0.04, type: 'city' }, // FAWI
    { lat: -25.83, lng: 28.222, city: 'WATERKLOOF AFB', size: 0.04, type: 'city' }, // FAWK
    { lat: -27.998, lng: 26.669, city: 'WELKOM', size: 0.04, type: 'city' }, // FAWM
    { lat: -27.847, lng: 26.35, city: 'WESSELSBRON', size: 0.04, type: 'city' }, // FAWS
    { lat: -33.9, lng: 18.498, city: 'YSTERPLAAT', size: 0.04, type: 'city' }, // FAYP
    { lat: -25.599, lng: 26.042, city: 'ZEERUST', size: 0.04, type: 'city' }, // FAZR
    { lat: -21.159, lng: 27.474, city: 'FRANCISTOWN', size: 0.04, type: 'city' }, // FBFT
    { lat: -24.602, lng: 24.691, city: 'JWANENG', size: 0.04, type: 'city' }, // FBJW
    { lat: -17.833, lng: 25.162, city: 'KASANE', size: 0.04, type: 'city' }, // FBKE
    { lat: -19.972, lng: 23.431, city: 'MAUN', size: 0.04, type: 'city' }, // FBMN
    { lat: -21.266, lng: 25.32, city: 'ORAPA', size: 0.04, type: 'city' }, // FBOR
    { lat: -24.555, lng: 25.918, city: 'SIR SERETSE KHAMA INTERNATIONAL', size: 0.04, type: 'city' }, // FBSK
    { lat: -22.058, lng: 27.829, city: 'SELEBI PHIKWE', size: 0.04, type: 'city' }, // FBSP
    { lat: -4.252, lng: 15.253, city: 'BRAZZAVILLE MAYA MAYA', size: 0.04, type: 'city' }, // FCBB
    { lat: 1.589, lng: 18.047, city: 'IMPFONDO', size: 0.04, type: 'city' }, // FCOI
    { lat: -0.021, lng: 15.575, city: 'MAKOUA', size: 0.04, type: 'city' }, // FCOM
    { lat: -0.531, lng: 15.95, city: 'OWANDO', size: 0.04, type: 'city' }, // FCOO
    { lat: 1.616, lng: 16.038, city: 'OUESSO', size: 0.04, type: 'city' }, // FCOU
    { lat: -3.483, lng: 12.617, city: 'MAKABANA', size: 0.04, type: 'city' }, // FCPA
    { lat: -4.208, lng: 12.661, city: 'DOLISIE', size: 0.04, type: 'city' }, // FCPD
    { lat: -4.813, lng: 11.886, city: 'POINTE NOIRE', size: 0.04, type: 'city' }, // FCPP
    { lat: -26.529, lng: 31.308, city: 'MATSAPHA', size: 0.04, type: 'city' }, // FDMS
    { lat: 4.398, lng: 18.519, city: 'BANGUI M POKO', size: 0.04, type: 'city' }, // FEFF
    { lat: 4.784, lng: 22.781, city: 'BANGASSOU', size: 0.04, type: 'city' }, // FEFG
    { lat: 10.236, lng: 22.717, city: 'BIRAO', size: 0.04, type: 'city' }, // FEFI
    { lat: 5.847, lng: 20.649, city: 'BAMBARI', size: 0.04, type: 'city' }, // FEFM
    { lat: 8.427, lng: 20.635, city: 'NDELE', size: 0.04, type: 'city' }, // FEFN
    { lat: 5.958, lng: 15.637, city: 'BOUAR', size: 0.04, type: 'city' }, // FEFO
    { lat: 6.528, lng: 21.989, city: 'BRIA', size: 0.04, type: 'city' }, // FEFR
    { lat: 4.221, lng: 15.786, city: 'BERBERATI', size: 0.04, type: 'city' }, // FEFT
    { lat: 45.154, lng: -89.111, city: 'YALINGA', size: 0.04, type: 'city' }, // FEFY
    { lat: 1.905, lng: 9.806, city: 'BATA', size: 0.04, type: 'city' }, // FGBT
    { lat: 3.755, lng: 8.709, city: 'MALABO', size: 0.04, type: 'city' }, // FGSL
    { lat: -7.969, lng: -14.394, city: 'ASCENSION AUX AF', size: 0.04, type: 'city' }, // FHAW
    { lat: -20.43, lng: 57.683, city: 'SIR SEEWOOSAGUR RAMGOOLAM INTERNATIONAL', size: 0.04, type: 'city' }, // FIMP
    { lat: -19.758, lng: 63.362, city: 'PLAINE CORAIL', size: 0.04, type: 'city' }, // FIMR
    { lat: -7.313, lng: 72.411, city: 'DIEGO GARCIA NSF', size: 0.04, type: 'city' }, // FJDG
    { lat: 4.089, lng: 9.36, city: 'TIKO', size: 0.04, type: 'city' }, // FKKC
    { lat: 4.006, lng: 9.719, city: 'DOUALA', size: 0.04, type: 'city' }, // FKKD
    { lat: 4.473, lng: 14.364, city: 'BATOURI', size: 0.04, type: 'city' }, // FKKI
    { lat: 10.451, lng: 14.257, city: 'MAROUA SALAK', size: 0.04, type: 'city' }, // FKKL
    { lat: 5.637, lng: 10.751, city: 'FOUMBAN NKOUNJA', size: 0.04, type: 'city' }, // FKKM
    { lat: 7.357, lng: 13.559, city: 'NGAOUNDERE', size: 0.04, type: 'city' }, // FKKN
    { lat: 9.336, lng: 13.37, city: 'GAROUA', size: 0.04, type: 'city' }, // FKKR
    { lat: 5.537, lng: 10.354, city: 'BAFOUSSAM', size: 0.04, type: 'city' }, // FKKU
    { lat: 6.039, lng: 10.123, city: 'BAMENDA', size: 0.04, type: 'city' }, // FKKV
    { lat: 3.835, lng: 11.524, city: 'YAOUNDE', size: 0.04, type: 'city' }, // FKKY
    { lat: -12.573, lng: 27.894, city: 'KASOMPE', size: 0.04, type: 'city' }, // FLKE
    { lat: -14.997, lng: 22.648, city: 'KALABO', size: 0.04, type: 'city' }, // FLKL
    { lat: -17.822, lng: 25.822, city: 'LIVINGSTONE', size: 0.04, type: 'city' }, // FLLI
    { lat: -15.331, lng: 28.453, city: 'LUSAKA INTERNATIONAL', size: 0.04, type: 'city' }, // FLLS
    { lat: -11.138, lng: 28.875, city: 'MANSA', size: 0.04, type: 'city' }, // FLMA
    { lat: -13.259, lng: 31.936, city: 'MFUWE', size: 0.04, type: 'city' }, // FLMF
    { lat: -15.254, lng: 23.162, city: 'MONGU', size: 0.04, type: 'city' }, // FLMG
    { lat: -12.565, lng: 28.299, city: 'MUFULIRA', size: 0.04, type: 'city' }, // FLML
    { lat: -12.998, lng: 28.665, city: 'NDOLA', size: 0.04, type: 'city' }, // FLND
    { lat: -12.9, lng: 28.15, city: 'SOUTHDOWNS', size: 0.04, type: 'city' }, // FLSO
    { lat: -13.539, lng: 23.11, city: 'ZAMBEZI', size: 0.04, type: 'city' }, // FLZB
    { lat: -11.534, lng: 43.272, city: 'MORONI HAHAIA', size: 0.04, type: 'city' }, // FMCH
    { lat: -12.298, lng: 43.766, city: 'MOHELI BANDAR ES SALAM', size: 0.04, type: 'city' }, // FMCI
    { lat: -11.711, lng: 43.244, city: 'MORONI ICONI', size: 0.04, type: 'city' }, // FMCN
    { lat: -12.132, lng: 44.43, city: 'ANJOUAN OUANI', size: 0.04, type: 'city' }, // FMCV
    { lat: -12.805, lng: 45.281, city: 'DZAOUDZI PAMANZI', size: 0.04, type: 'city' }, // FMCZ
    { lat: -20.887, lng: 55.51, city: 'ST DENIS GILLOT', size: 0.04, type: 'city' }, // FMEE
    { lat: -21.321, lng: 55.425, city: 'ST PIERRE PIERREFONDS', size: 0.04, type: 'city' }, // FMEP
    { lat: -18.797, lng: 47.479, city: 'ANTANANARIVO IVATO', size: 0.04, type: 'city' }, // FMMI
    { lat: -19.563, lng: 45.451, city: 'MIANDRIVAZO', size: 0.04, type: 'city' }, // FMMN
    { lat: -17.094, lng: 49.816, city: 'SAINTE MARIE', size: 0.04, type: 'city' }, // FMMS
    { lat: -18.109, lng: 49.392, city: 'TOAMASINA', size: 0.04, type: 'city' }, // FMMT
    { lat: -20.285, lng: 44.318, city: 'MORONDAVA', size: 0.04, type: 'city' }, // FMMV
    { lat: -12.349, lng: 49.292, city: 'ANTSIRANANA ARRACHART', size: 0.04, type: 'city' }, // FMNA
    { lat: -16.164, lng: 49.774, city: 'MANANARA AVARATRA', size: 0.04, type: 'city' }, // FMNC
    { lat: -14.652, lng: 49.621, city: 'ANDAPA', size: 0.04, type: 'city' }, // FMND
    { lat: -13.188, lng: 48.988, city: 'AMBILOBE MAHAVAVY', size: 0.04, type: 'city' }, // FMNE
    { lat: -14.999, lng: 50.32, city: 'ANTALAHA ANTSIRABATO', size: 0.04, type: 'city' }, // FMNH
    { lat: -14.629, lng: 47.764, city: 'ANALALAVA', size: 0.04, type: 'city' }, // FMNL
    { lat: -15.667, lng: 46.352, city: 'MAHAJANGA PHILIBERT TSIRANANA', size: 0.04, type: 'city' }, // FMNM
    { lat: -13.312, lng: 48.314, city: 'NOSY BE FASCENE', size: 0.04, type: 'city' }, // FMNN
    { lat: -16.742, lng: 44.481, city: 'BESALAMPY', size: 0.04, type: 'city' }, // FMNQ
    { lat: -15.437, lng: 49.688, city: 'MAROANTSETRA', size: 0.04, type: 'city' }, // FMNR
    { lat: -14.279, lng: 50.175, city: 'SAMBAVA SUD', size: 0.04, type: 'city' }, // FMNS
    { lat: -13.376, lng: 50.003, city: 'VOHIMARINA', size: 0.04, type: 'city' }, // FMNV
    { lat: -14.899, lng: 47.994, city: 'ANTSOHIHY AMBALABE', size: 0.04, type: 'city' }, // FMNW
    { lat: -13.485, lng: 48.633, city: 'AMPAMPAMENA', size: 0.04, type: 'city' }, // FMNZ
    { lat: -25.038, lng: 46.956, city: 'TOLAGNARO', size: 0.04, type: 'city' }, // FMSD
    { lat: -21.441, lng: 47.112, city: 'FIANARANTSOA', size: 0.04, type: 'city' }, // FMSF
    { lat: -22.805, lng: 47.821, city: 'FARAFANGANA', size: 0.04, type: 'city' }, // FMSG
    { lat: -22.12, lng: 48.022, city: 'MANAKARA SUD', size: 0.04, type: 'city' }, // FMSK
    { lat: -21.202, lng: 48.358, city: 'MANANJARY', size: 0.04, type: 'city' }, // FMSM
    { lat: -21.754, lng: 43.375, city: 'MOROMBE', size: 0.04, type: 'city' }, // FMSR
    { lat: -23.383, lng: 43.728, city: 'TOLIARA', size: 0.04, type: 'city' }, // FMST
    { lat: -6.27, lng: 14.247, city: 'MBANZA CONGO', size: 0.04, type: 'city' }, // FNBC
    { lat: -12.609, lng: 13.404, city: 'BENGUELA', size: 0.04, type: 'city' }, // FNBG
    { lat: -5.597, lng: 12.188, city: 'CABINDA', size: 0.04, type: 'city' }, // FNCA
    { lat: -7.357, lng: 20.804, city: 'CHITATO', size: 0.04, type: 'city' }, // FNCH
    { lat: -8.374, lng: 18.924, city: 'CAMAXILO', size: 0.04, type: 'city' }, // FNCX
    { lat: -11.894, lng: 22.916, city: 'CAZOMBO', size: 0.04, type: 'city' }, // FNCZ
    { lat: -17.045, lng: 15.687, city: 'NGIVA', size: 0.04, type: 'city' }, // FNGI
    { lat: -12.809, lng: 15.76, city: 'HUAMBO', size: 0.04, type: 'city' }, // FNHU
    { lat: -12.404, lng: 16.947, city: 'KUITO', size: 0.04, type: 'city' }, // FNKU
    { lat: -12.371, lng: 13.536, city: 'LOBITO', size: 0.04, type: 'city' }, // FNLB
    { lat: -8.858, lng: 13.231, city: 'LUANDA 4 DE FEVEREIRO', size: 0.04, type: 'city' }, // FNLU
    { lat: -9.525, lng: 16.312, city: 'MALANJE', size: 0.04, type: 'city' }, // FNMA
    { lat: -14.658, lng: 17.72, city: 'MENONGUE', size: 0.04, type: 'city' }, // FNME
    { lat: -15.261, lng: 12.147, city: 'NAMIBE', size: 0.04, type: 'city' }, // FNMO
    { lat: -7.754, lng: 15.287, city: 'NEGAGE', size: 0.04, type: 'city' }, // FNNG
    { lat: -10.722, lng: 13.765, city: 'PORTO AMBOIM', size: 0.04, type: 'city' }, // FNPA
    { lat: -9.689, lng: 20.432, city: 'SAURIMO', size: 0.04, type: 'city' }, // FNSA
    { lat: -6.141, lng: 12.372, city: 'SOYO', size: 0.04, type: 'city' }, // FNSO
    { lat: -7.147, lng: 14.248, city: 'TOTO', size: 0.04, type: 'city' }, // FNTO
    { lat: -11.768, lng: 19.898, city: 'LUENA', size: 0.04, type: 'city' }, // FNUE
    { lat: -7.603, lng: 15.028, city: 'UIGE', size: 0.04, type: 'city' }, // FNUG
    { lat: -16.755, lng: 14.965, city: 'XANGONGO', size: 0.04, type: 'city' }, // FNXA
    { lat: 1.541, lng: 11.581, city: 'OYEM', size: 0.04, type: 'city' }, // FOGO
    { lat: -0.665, lng: 13.673, city: 'OKONDJA', size: 0.04, type: 'city' }, // FOGQ
    { lat: -0.704, lng: 10.246, city: 'LAMBARENE', size: 0.04, type: 'city' }, // FOGR
    { lat: 2.076, lng: 11.493, city: 'BITAM', size: 0.04, type: 'city' }, // FOOB
    { lat: -1.537, lng: 13.269, city: 'MOANDA', size: 0.04, type: 'city' }, // FOOD
    { lat: -0.712, lng: 8.754, city: 'PORT GENTIL', size: 0.04, type: 'city' }, // FOOG
    { lat: -1.575, lng: 9.263, city: 'OMBOUE HOPITAL', size: 0.04, type: 'city' }, // FOOH
    { lat: 0.579, lng: 12.891, city: 'MAKOKOU', size: 0.04, type: 'city' }, // FOOK
    { lat: 0.458, lng: 9.412, city: 'LIBREVILLE LEON M BA', size: 0.04, type: 'city' }, // FOOL
    { lat: 0.776, lng: 11.553, city: 'MITZIC', size: 0.04, type: 'city' }, // FOOM
    { lat: -1.656, lng: 13.438, city: 'FRANCEVILLE MVENGUE', size: 0.04, type: 'city' }, // FOON
    { lat: -0.826, lng: 12.747, city: 'LASTOURVILLE', size: 0.04, type: 'city' }, // FOOR
    { lat: -2.889, lng: 10.919, city: 'TCHIBANGA', size: 0.04, type: 'city' }, // FOOT
    { lat: 1.663, lng: 7.412, city: 'PRINCIPE', size: 0.04, type: 'city' }, // FPPR
    { lat: 0.378, lng: 6.712, city: 'SAO TOME INTERNATIONAL', size: 0.04, type: 'city' }, // FPST
    { lat: -19.796, lng: 34.907, city: 'BEIRA', size: 0.04, type: 'city' }, // FQBR
    { lat: -14.82, lng: 36.532, city: 'CUAMBA', size: 0.04, type: 'city' }, // FQCB
    { lat: -19.151, lng: 33.429, city: 'CHIMOIO', size: 0.04, type: 'city' }, // FQCH
    { lat: -15.734, lng: 32.757, city: 'ESTIMA', size: 0.04, type: 'city' }, // FQES
    { lat: -23.876, lng: 35.408, city: 'INHAMBANE', size: 0.04, type: 'city' }, // FQIN
    { lat: -13.274, lng: 35.266, city: 'LICHINGA', size: 0.04, type: 'city' }, // FQLC
    { lat: -15.033, lng: 40.672, city: 'LUMBO', size: 0.04, type: 'city' }, // FQLU
    { lat: -25.921, lng: 32.573, city: 'MAPUTO', size: 0.04, type: 'city' }, // FQMA
    { lat: -11.673, lng: 39.563, city: 'MUEDA', size: 0.04, type: 'city' }, // FQMD
    { lat: -11.362, lng: 40.355, city: 'MOCIMBOA DA PRAIA', size: 0.04, type: 'city' }, // FQMP
    { lat: -13.225, lng: 37.552, city: 'MARRUPA', size: 0.04, type: 'city' }, // FQMR
    { lat: -14.488, lng: 40.712, city: 'NACALA', size: 0.04, type: 'city' }, // FQNC
    { lat: -15.106, lng: 39.282, city: 'NAMPULA', size: 0.04, type: 'city' }, // FQNP
    { lat: -12.987, lng: 40.522, city: 'PEMBA', size: 0.04, type: 'city' }, // FQPB
    { lat: -17.856, lng: 36.869, city: 'QUELIMANE', size: 0.04, type: 'city' }, // FQQL
    { lat: -15.602, lng: 32.773, city: 'SONGO', size: 0.04, type: 'city' }, // FQSG
    { lat: -16.105, lng: 33.64, city: 'TETE CHINGOZI', size: 0.04, type: 'city' }, // FQTT
    { lat: -14.704, lng: 34.352, city: 'ULONGWE', size: 0.04, type: 'city' }, // FQUG
    { lat: -22.018, lng: 35.313, city: 'VILANKULO', size: 0.04, type: 'city' }, // FQVL
    { lat: -7.005, lng: 52.726, city: 'ALPHONSE', size: 0.04, type: 'city' }, // FSAL
    { lat: -5.696, lng: 53.654, city: 'DESROCHES', size: 0.04, type: 'city' }, // FSDR
    { lat: -10.109, lng: 51.176, city: 'FARQUHAR', size: 0.04, type: 'city' }, // FSFA
    { lat: -4.674, lng: 55.522, city: 'SEYCHELLES INTERNATIONAL', size: 0.04, type: 'city' }, // FSIA
    { lat: -4.319, lng: 55.691, city: 'PRASLIN', size: 0.04, type: 'city' }, // FSPP
    { lat: -7.164, lng: 56.264, city: 'COETIVY', size: 0.04, type: 'city' }, // FSSC
    { lat: 9.151, lng: 18.379, city: 'SARH', size: 0.04, type: 'city' }, // FTTA
    { lat: 13.847, lng: 20.844, city: 'ABECHE', size: 0.04, type: 'city' }, // FTTC
    { lat: 8.62, lng: 16.068, city: 'MOUNDOU', size: 0.04, type: 'city' }, // FTTD
    { lat: 12.134, lng: 15.034, city: 'NDJAMENA', size: 0.04, type: 'city' }, // FTTJ
    { lat: 9.379, lng: 14.926, city: 'PALA', size: 0.04, type: 'city' }, // FTTP
    { lat: 17.917, lng: 19.111, city: 'FAYA LARGEAU', size: 0.04, type: 'city' }, // FTTY
    { lat: -20.017, lng: 28.618, city: 'JOSHUA MQABUKO NKOMO INTERNATIONAL', size: 0.04, type: 'city' }, // FVBU
    { lat: -17.751, lng: 30.924, city: 'HARARE CHARLES PRINCE', size: 0.04, type: 'city' }, // FVCP
    { lat: -21.008, lng: 31.578, city: 'CHIREDZI BUFFALO RANGE', size: 0.04, type: 'city' }, // FVCZ
    { lat: -18.096, lng: 25.839, city: 'VICTORIA FALLS INTERNATIONAL', size: 0.04, type: 'city' }, // FVFA
    { lat: -18.977, lng: 32.451, city: 'MUTARE GRAND REEF', size: 0.04, type: 'city' }, // FVGR
    { lat: -17.932, lng: 31.093, city: 'HARARE INTERNATIONAL', size: 0.04, type: 'city' }, // FVHA
    { lat: -16.52, lng: 28.885, city: 'KARIBA INTERNATIONAL', size: 0.04, type: 'city' }, // FVKB
    { lat: -17.432, lng: 32.184, city: 'MUTOKO', size: 0.04, type: 'city' }, // FVMT
    { lat: -18.998, lng: 32.627, city: 'MUTARE', size: 0.04, type: 'city' }, // FVMU
    { lat: -20.055, lng: 30.859, city: 'MASVINGO', size: 0.04, type: 'city' }, // FVMV
    { lat: -20.289, lng: 30.088, city: 'ZVISHAVANE', size: 0.04, type: 'city' }, // FVSH
    { lat: -19.437, lng: 29.862, city: 'GWERU THORNHILL', size: 0.04, type: 'city' }, // FVTL
    { lat: -18.63, lng: 27.021, city: 'HWANGE NATIONAL PARK', size: 0.04, type: 'city' }, // FVWN
    { lat: -19.029, lng: 29.722, city: 'ZISCO', size: 0.04, type: 'city' }, // FVZC
    { lat: -15.679, lng: 34.974, city: 'CHILEKA INTERNATIONAL', size: 0.04, type: 'city' }, // FWCL
    { lat: -9.953, lng: 33.893, city: 'KARONGA', size: 0.04, type: 'city' }, // FWKA
    { lat: -13.014, lng: 33.468, city: 'KASUNGU', size: 0.04, type: 'city' }, // FWKG
    { lat: 30.838, lng: -85.182, city: 'MARIANNA MUNI', size: 0.04, type: 'city' }, // FWMG
    { lat: -11.445, lng: 34.012, city: 'MZUZU', size: 0.04, type: 'city' }, // FWUU
    { lat: -29.462, lng: 27.553, city: 'MOSHOESHOE I INTERNATIONAL', size: 0.04, type: 'city' }, // FXMM
    { lat: -29.304, lng: 27.503, city: 'MEJAMETALANA', size: 0.04, type: 'city' }, // FXMU
    { lat: -4.386, lng: 15.444, city: 'KINSHASA NDJILI INTERNATIONAL', size: 0.04, type: 'city' }, // FZAA
    { lat: -4.325, lng: 15.328, city: 'KINSHASA NDOLO', size: 0.04, type: 'city' }, // FZAB
    { lat: -5.931, lng: 12.352, city: 'MUANDA', size: 0.04, type: 'city' }, // FZAG
    { lat: -5.918, lng: 12.447, city: 'KITONA BASE', size: 0.04, type: 'city' }, // FZAI
    { lat: -5.799, lng: 13.441, city: 'MATADI TSHIMPI', size: 0.04, type: 'city' }, // FZAM
    { lat: -3.311, lng: 17.382, city: 'BANDUNDU', size: 0.04, type: 'city' }, // FZBO
    { lat: -5.036, lng: 18.786, city: 'KIKWIT', size: 0.04, type: 'city' }, // FZCA
    { lat: 0.022, lng: 18.289, city: 'MBANDAKA', size: 0.04, type: 'city' }, // FZEA
    { lat: 4.253, lng: 20.975, city: 'GBADOLITE', size: 0.04, type: 'city' }, // FZFD
    { lat: 3.235, lng: 19.771, city: 'GEMENA', size: 0.04, type: 'city' }, // FZFK
    { lat: 4.158, lng: 21.651, city: 'KOTAKOLI', size: 0.04, type: 'city' }, // FZFP
    { lat: 2.171, lng: 21.497, city: 'LISALA', size: 0.04, type: 'city' }, // FZGA
    { lat: 0.518, lng: 25.155, city: 'KISANGANI SIMISINI', size: 0.04, type: 'city' }, // FZIA
    { lat: 2.827, lng: 27.588, city: 'ISIRO MATARI', size: 0.04, type: 'city' }, // FZJH
    { lat: 1.566, lng: 30.221, city: 'BUNIA', size: 0.04, type: 'city' }, // FZKA
    { lat: 2.818, lng: 24.794, city: 'BUTA ZEGA', size: 0.04, type: 'city' }, // FZKJ
    { lat: -2.309, lng: 28.809, city: 'BUKAVU KAVUMU', size: 0.04, type: 'city' }, // FZMA
    { lat: -1.671, lng: 29.238, city: 'GOMA', size: 0.04, type: 'city' }, // FZNA
    { lat: -2.919, lng: 25.915, city: 'KINDU', size: 0.04, type: 'city' }, // FZOA
    { lat: -11.591, lng: 27.531, city: 'LUBUMBASHI INTERNATIONAL', size: 0.04, type: 'city' }, // FZQA
    { lat: -10.766, lng: 25.506, city: 'KOLWEZI', size: 0.04, type: 'city' }, // FZQM
    { lat: -5.876, lng: 29.25, city: 'KALEMIE', size: 0.04, type: 'city' }, // FZRF
    { lat: -8.642, lng: 25.253, city: 'KAMINA BASE', size: 0.04, type: 'city' }, // FZSA
    { lat: -9.469, lng: 25.759, city: 'LUENA', size: 0.04, type: 'city' }, // FZTL
    { lat: -5.9, lng: 22.469, city: 'KANANGA', size: 0.04, type: 'city' }, // FZUA
    { lat: -6.121, lng: 23.569, city: 'MBUJI MAYI', size: 0.04, type: 'city' }, // FZWA
    { lat: 12.533, lng: -7.95, city: 'BAMAKO SENOU', size: 0.04, type: 'city' }, // GABS
    { lat: 16.248, lng: -0.005, city: 'GAO', size: 0.04, type: 'city' }, // GAGO
    { lat: 14.431, lng: -11.439, city: 'KAYES', size: 0.04, type: 'city' }, // GAKY
    { lat: 14.513, lng: -4.079, city: 'MOPTI AMBODEDJO', size: 0.04, type: 'city' }, // GAMB
    { lat: 15.239, lng: -9.576, city: 'NIORO', size: 0.04, type: 'city' }, // GANR
    { lat: 16.73, lng: -3.007, city: 'TOMBOUCTOU', size: 0.04, type: 'city' }, // GATB
    { lat: 20.246, lng: 0.981, city: 'TESSALIT', size: 0.04, type: 'city' }, // GATS
    { lat: 13.338, lng: -16.652, city: 'BANJUL INTERNATIONAL', size: 0.04, type: 'city' }, // GBYD
    { lat: 28.453, lng: -13.864, city: 'FUERTEVENTURA', size: 0.04, type: 'city' }, // GCFV
    { lat: 27.815, lng: -17.887, city: 'HIERRO', size: 0.04, type: 'city' }, // GCHI
    { lat: 28.626, lng: -17.756, city: 'LA PALMA', size: 0.04, type: 'city' }, // GCLA
    { lat: 27.932, lng: -15.386, city: 'GRAN CANARIA', size: 0.04, type: 'city' }, // GCLP
    { lat: 28.945, lng: -13.605, city: 'LANZAROTE', size: 0.04, type: 'city' }, // GCRR
    { lat: 28.044, lng: -16.572, city: 'TENERIFE SUR', size: 0.04, type: 'city' }, // GCTS
    { lat: 28.482, lng: -16.341, city: 'TENERIFE NORTE', size: 0.04, type: 'city' }, // GCXO
    { lat: 35.28, lng: -2.956, city: 'MELILLA', size: 0.04, type: 'city' }, // GEML
    { lat: 8.394, lng: -13.128, city: 'HASTINGS', size: 0.04, type: 'city' }, // GFHA
    { lat: 8.616, lng: -13.195, city: 'FREETOWN LUNGI', size: 0.04, type: 'city' }, // GFLL
    { lat: 11.288, lng: -15.181, city: 'CUFAR', size: 0.04, type: 'city' }, // GGCF
    { lat: 11.895, lng: -15.654, city: 'BISSAU OSWALDO VIEIRA INTERNATIONAL', size: 0.04, type: 'city' }, // GGOV
    { lat: 6.289, lng: -10.759, city: 'MONROVIA SPRIGGS PAYNE', size: 0.04, type: 'city' }, // GLMR
    { lat: 6.234, lng: -10.362, city: 'MONROVIA ROBERTS INTERNATIONAL', size: 0.04, type: 'city' }, // GLRB
    { lat: 30.381, lng: -9.546, city: 'INEZGANE', size: 0.04, type: 'city' }, // GMAA
    { lat: 28.448, lng: -11.161, city: 'PLAGE BLANCHE', size: 0.04, type: 'city' }, // GMAT
    { lat: 33.927, lng: -4.978, city: 'SAISS', size: 0.04, type: 'city' }, // GMFF
    { lat: 33.505, lng: -5.153, city: 'IFRANE', size: 0.04, type: 'city' }, // GMFI
    { lat: 31.949, lng: -4.401, city: 'MOULAY ALI CHERIF', size: 0.04, type: 'city' }, // GMFK
    { lat: 33.879, lng: -5.515, city: 'BASSATINE', size: 0.04, type: 'city' }, // GMFM
    { lat: 35.153, lng: -2.92, city: 'TAOUIMA', size: 0.04, type: 'city' }, // GMFN
    { lat: 34.787, lng: -1.924, city: 'ANGADS', size: 0.04, type: 'city' }, // GMFO
    { lat: 33.553, lng: -7.661, city: 'ANFA', size: 0.04, type: 'city' }, // GMMC
    { lat: 34.051, lng: -6.751, city: 'SALE', size: 0.04, type: 'city' }, // GMME
    { lat: 29.369, lng: -10.18, city: 'SIDI IFNI', size: 0.04, type: 'city' }, // GMMF
    { lat: 31.404, lng: -9.685, city: 'ESSAOUIRA', size: 0.04, type: 'city' }, // GMMI
    { lat: 33.368, lng: -7.588, city: 'MOHAMMED V', size: 0.04, type: 'city' }, // GMMN
    { lat: 31.607, lng: -8.036, city: 'MENARA', size: 0.04, type: 'city' }, // GMMX
    { lat: 34.299, lng: -6.596, city: 'KENITRA', size: 0.04, type: 'city' }, // GMMY
    { lat: 30.939, lng: -6.909, city: 'OUARZAZATE', size: 0.04, type: 'city' }, // GMMZ
    { lat: 35.177, lng: -3.839, city: 'CHERIF EL IDRISSI', size: 0.04, type: 'city' }, // GMTA
    { lat: 35.594, lng: -5.32, city: 'SANIAT RMEL', size: 0.04, type: 'city' }, // GMTN
    { lat: 35.727, lng: -5.917, city: 'IBN BATOUTA', size: 0.04, type: 'city' }, // GMTT
    { lat: 12.556, lng: -16.282, city: 'ZIGUINCHOR', size: 0.04, type: 'city' }, // GOGG
    { lat: 12.88, lng: -14.955, city: 'KOLDA', size: 0.04, type: 'city' }, // GOGK
    { lat: 12.41, lng: -16.746, city: 'CAP SKIRING', size: 0.04, type: 'city' }, // GOGS
    { lat: 14.147, lng: -16.051, city: 'KAOLACK', size: 0.04, type: 'city' }, // GOOK
    { lat: 14.739, lng: -17.49, city: 'LEOPOLD SEDAR SENGHOR INTERNATIONAL', size: 0.04, type: 'city' }, // GOOY
    { lat: 16.05, lng: -16.461, city: 'SAINT LOUIS', size: 0.04, type: 'city' }, // GOSS
    { lat: 14.847, lng: -12.468, city: 'BAKEL', size: 0.04, type: 'city' }, // GOTB
    { lat: 12.572, lng: -12.22, city: 'KEDOUGOU', size: 0.04, type: 'city' }, // GOTK
    { lat: 13.737, lng: -13.653, city: 'TAMBACOUNDA', size: 0.04, type: 'city' }, // GOTT
    { lat: 16.711, lng: -9.638, city: 'AIOUN EL ATROUSS', size: 0.04, type: 'city' }, // GQNA
    { lat: 18.57, lng: -11.423, city: 'TIDJIKJA', size: 0.04, type: 'city' }, // GQND
    { lat: 16.59, lng: -11.406, city: 'KIFFA', size: 0.04, type: 'city' }, // GQNF
    { lat: 16.622, lng: -7.314, city: 'NEMA', size: 0.04, type: 'city' }, // GQNI
    { lat: 16.159, lng: -13.508, city: 'KAEDI', size: 0.04, type: 'city' }, // GQNK
    { lat: 18.098, lng: -15.948, city: 'NOUAKCHOTT', size: 0.04, type: 'city' }, // GQNN
    { lat: 15.179, lng: -12.207, city: 'SELIBADY', size: 0.04, type: 'city' }, // GQNS
    { lat: 20.507, lng: -13.043, city: 'ATAR', size: 0.04, type: 'city' }, // GQPA
    { lat: 20.928, lng: -17.031, city: 'NOUADHIBOU', size: 0.04, type: 'city' }, // GQPP
    { lat: 25.237, lng: -11.589, city: 'BIR MOGHREIN', size: 0.04, type: 'city' }, // GQPT
    { lat: 10.351, lng: -13.569, city: 'FRIA', size: 0.04, type: 'city' }, // GUFA
    { lat: 10.036, lng: -10.77, city: 'FARANAH', size: 0.04, type: 'city' }, // GUFH
    { lat: 11.326, lng: -12.287, city: 'LABE', size: 0.04, type: 'city' }, // GULB
    { lat: 8.481, lng: -9.526, city: 'MACENTA', size: 0.04, type: 'city' }, // GUMA
    { lat: 7.806, lng: -8.702, city: 'NZEREKORE', size: 0.04, type: 'city' }, // GUNZ
    { lat: 16.741, lng: -22.949, city: 'AMILCAR CABRAL INTERNATIONAL', size: 0.04, type: 'city' }, // GVAC
    { lat: 16.137, lng: -22.889, city: 'RABIL', size: 0.04, type: 'city' }, // GVBA
    { lat: 14.924, lng: -23.493, city: 'FRANCISCO MENDES', size: 0.04, type: 'city' }, // GVFM
    { lat: 15.156, lng: -23.214, city: 'MAIO', size: 0.04, type: 'city' }, // GVMA
    { lat: 16.588, lng: -24.284, city: 'PREGUICA', size: 0.04, type: 'city' }, // GVSN
    { lat: 16.834, lng: -25.057, city: 'SAO PEDRO', size: 0.04, type: 'city' }, // GVSV
    { lat: 8.977, lng: 38.8, city: 'BOLE INTERNATIONAL', size: 0.04, type: 'city' }, // HAAB
    { lat: 9.004, lng: 38.726, city: 'LIDETA', size: 0.04, type: 'city' }, // HAAL
    { lat: 11.608, lng: 37.321, city: 'BAHIR DAR', size: 0.04, type: 'city' }, // HABD
    { lat: 9.625, lng: 41.854, city: 'ABA TENNA DEJAZMATCH YILMA INTERNATIONAL', size: 0.04, type: 'city' }, // HADR
    { lat: 8.128, lng: 34.563, city: 'GAMBELLA', size: 0.04, type: 'city' }, // HAGM
    { lat: 12.518, lng: 37.432, city: 'GONDER', size: 0.04, type: 'city' }, // HAGN
    { lat: 8.716, lng: 39.008, city: 'HARAR MEDA', size: 0.04, type: 'city' }, // HAHM
    { lat: 7.666, lng: 36.816, city: 'ABA SEGUD', size: 0.04, type: 'city' }, // HAJM
    { lat: 11.975, lng: 38.98, city: 'LALIBELLA', size: 0.04, type: 'city' }, // HALL
    { lat: 13.467, lng: 39.533, city: 'MEKELE', size: 0.04, type: 'city' }, // HAMK
    { lat: -3.324, lng: 29.318, city: 'BUJUMBURA INTERNATIONAL', size: 0.04, type: 'city' }, // HBBA
    { lat: 3.099, lng: 43.624, city: 'BAIDOA', size: 0.04, type: 'city' }, // HCMB
    { lat: 9.518, lng: 44.089, city: 'HARGEISA', size: 0.04, type: 'city' }, // HCMH
    { lat: 10.389, lng: 44.941, city: 'BERBERA', size: 0.04, type: 'city' }, // HCMI
    { lat: -0.377, lng: 42.459, city: 'KISIMAYU', size: 0.04, type: 'city' }, // HCMK
    { lat: 2.014, lng: 45.305, city: 'MOGADISHU', size: 0.04, type: 'city' }, // HCMM
    { lat: 31.073, lng: 33.836, city: 'EL ARISH INTERNATIONAL', size: 0.04, type: 'city' }, // HEAR
    { lat: 27.046, lng: 31.012, city: 'ASYUT INTERNATIONAL', size: 0.04, type: 'city' }, // HEAT
    { lat: 31.184, lng: 29.949, city: 'ALEXANDRIA INTERNATIONAL', size: 0.04, type: 'city' }, // HEAX
    { lat: 22.376, lng: 31.612, city: 'ABU SIMBEL', size: 0.04, type: 'city' }, // HEBL
    { lat: 30.122, lng: 31.406, city: 'CAIRO INTERNATIONAL', size: 0.04, type: 'city' }, // HECA
    { lat: 30.116, lng: 30.915, city: 'CAIRO WEST', size: 0.04, type: 'city' }, // HECW
    { lat: 30.074, lng: 31.192, city: 'EMBABA', size: 0.04, type: 'city' }, // HEEM
    { lat: 27.184, lng: 33.798, city: 'HURGHADA INTERNATIONAL', size: 0.04, type: 'city' }, // HEGN
    { lat: 31.069, lng: 34.129, city: 'EL GORA', size: 0.04, type: 'city' }, // HEGR
    { lat: 25.671, lng: 32.706, city: 'LUXOR INTERNATIONAL', size: 0.04, type: 'city' }, // HELX
    { lat: 31.325, lng: 27.222, city: 'MERSA MATRUH', size: 0.04, type: 'city' }, // HEMM
    { lat: 31.279, lng: 32.24, city: 'PORT SAID', size: 0.04, type: 'city' }, // HEPS
    { lat: 28.685, lng: 34.063, city: 'ST CATHERINE INTERNATIONAL', size: 0.04, type: 'city' }, // HESC
    { lat: 23.964, lng: 32.82, city: 'ASWAN INTERNATIONAL', size: 0.04, type: 'city' }, // HESN
    { lat: 28.209, lng: 33.645, city: 'EL TOR', size: 0.04, type: 'city' }, // HETR
    { lat: 0.404, lng: 35.238, city: 'ELDORET INTERNATIONAL', size: 0.04, type: 'city' }, // HKEL
    { lat: -0.463, lng: 39.648, city: 'GARISSA', size: 0.04, type: 'city' }, // HKGA
    { lat: 0.339, lng: 37.591, city: 'ISIOLO', size: 0.04, type: 'city' }, // HKIS
    { lat: 0.271, lng: 34.787, city: 'KAKAMEGA', size: 0.04, type: 'city' }, // HKKG
    { lat: -0.086, lng: 34.729, city: 'KISUMU', size: 0.04, type: 'city' }, // HKKI
    { lat: 0.972, lng: 34.958, city: 'KITALE', size: 0.04, type: 'city' }, // HKKT
    { lat: 4.204, lng: 34.348, city: 'LOKICHOGGIO', size: 0.04, type: 'city' }, // HKLK
    { lat: 3.122, lng: 35.609, city: 'LODWAR', size: 0.04, type: 'city' }, // HKLO
    { lat: -2.252, lng: 40.913, city: 'LAMU MANDA', size: 0.04, type: 'city' }, // HKLU
    { lat: 2.763, lng: 36.718, city: 'LOYENGALANI', size: 0.04, type: 'city' }, // HKLY
    { lat: 3.934, lng: 41.844, city: 'MANDERA', size: 0.04, type: 'city' }, // HKMA
    { lat: 2.345, lng: 37.999, city: 'MARSABIT', size: 0.04, type: 'city' }, // HKMB
    { lat: 0.23, lng: 38.17, city: 'MULIKA', size: 0.04, type: 'city' }, // HKMK
    { lat: -3.229, lng: 40.102, city: 'MALINDI', size: 0.04, type: 'city' }, // HKML
    { lat: -4.035, lng: 39.594, city: 'MOI INTERNATIONAL', size: 0.04, type: 'city' }, // HKMO
    { lat: 3.47, lng: 39.101, city: 'MOYALE LOWER', size: 0.04, type: 'city' }, // HKMY
    { lat: -0.369, lng: 36.98, city: 'NYERI', size: 0.04, type: 'city' }, // HKNI
    { lat: -0.788, lng: 36.433, city: 'NAIVASHA', size: 0.04, type: 'city' }, // HKNV
    { lat: -1.322, lng: 36.815, city: 'NAIROBI WILSON', size: 0.04, type: 'city' }, // HKNW
    { lat: -0.061, lng: 37.039, city: 'NANYUKI', size: 0.04, type: 'city' }, // HKNY
    { lat: -1.277, lng: 36.862, city: 'NAIROBI EASTLEIGH', size: 0.04, type: 'city' }, // HKRE
    { lat: 1.733, lng: 40.091, city: 'WAJIR', size: 0.04, type: 'city' }, // HKWJ
    { lat: 28.795, lng: 22.081, city: 'BU ATTIFEL', size: 0.04, type: 'city' }, // HLFL
    { lat: 28.638, lng: 21.438, city: 'WAREHOUSE 59E', size: 0.04, type: 'city' }, // HLGL
    { lat: 25.146, lng: 10.143, city: 'GHAT', size: 0.04, type: 'city' }, // HLGT
    { lat: 24.179, lng: 23.314, city: 'KUFRA', size: 0.04, type: 'city' }, // HLKF
    { lat: 32.097, lng: 20.269, city: 'BENINA', size: 0.04, type: 'city' }, // HLLB
    { lat: 32.789, lng: 21.964, city: 'EL BEIDA', size: 0.04, type: 'city' }, // HLLQ
    { lat: 26.987, lng: 14.473, city: 'SEBHA', size: 0.04, type: 'city' }, // HLLS
    { lat: 32.663, lng: 13.159, city: 'TRIPOLI INTERNATIONAL', size: 0.04, type: 'city' }, // HLLT
    { lat: 30.378, lng: 19.576, city: 'MARSA BREGA', size: 0.04, type: 'city' }, // HLMB
    { lat: 30.5, lng: 18.527, city: 'RAS LANUF OIL', size: 0.04, type: 'city' }, // HLNF
    { lat: 29.11, lng: 15.966, city: 'HON', size: 0.04, type: 'city' }, // HLON
    { lat: 29.47, lng: 17.931, city: 'DAHRA', size: 0.04, type: 'city' }, // HLRA
    { lat: 30.152, lng: 9.715, city: 'GHADAMES EAST', size: 0.04, type: 'city' }, // HLTD
    { lat: 28.59, lng: 17.294, city: 'ZELLA 74', size: 0.04, type: 'city' }, // HLZA
    { lat: -1.677, lng: 29.259, city: 'GISENYI', size: 0.04, type: 'city' }, // HRYG
    { lat: -1.969, lng: 30.139, city: 'KIGALI INTERNATIONAL', size: 0.04, type: 'city' }, // HRYR
    { lat: -2.462, lng: 28.908, city: 'KAMEMBE', size: 0.04, type: 'city' }, // HRZA
    { lat: 19.154, lng: 30.43, city: 'DONGOLA', size: 0.04, type: 'city' }, // HSDN
    { lat: 11.786, lng: 34.336, city: 'DAMAZIN', size: 0.04, type: 'city' }, // HSDZ
    { lat: 13.615, lng: 25.325, city: 'EL FASHER', size: 0.04, type: 'city' }, // HSFS
    { lat: 15.386, lng: 36.328, city: 'KASSALA', size: 0.04, type: 'city' }, // HSKA
    { lat: 12.054, lng: 24.955, city: 'NYALA', size: 0.04, type: 'city' }, // HSNL
    { lat: 13.153, lng: 30.232, city: 'EL OBEID', size: 0.04, type: 'city' }, // HSOB
    { lat: 4.872, lng: 31.601, city: 'JUBA', size: 0.04, type: 'city' }, // HSSJ
    { lat: 9.559, lng: 31.652, city: 'MALAKAL', size: 0.04, type: 'city' }, // HSSM
    { lat: 19.576, lng: 37.216, city: 'PORT SUDAN', size: 0.04, type: 'city' }, // HSSP
    { lat: 15.589, lng: 32.553, city: 'KHARTOUM', size: 0.04, type: 'city' }, // HSSS
    { lat: 7.726, lng: 27.979, city: 'WAU', size: 0.04, type: 'city' }, // HSWW
    { lat: -3.368, lng: 36.633, city: 'ARUSHA', size: 0.04, type: 'city' }, // HTAR
    { lat: -6.878, lng: 39.203, city: 'DAR ES SALAAM', size: 0.04, type: 'city' }, // HTDA
    { lat: -6.17, lng: 35.752, city: 'DODOMA', size: 0.04, type: 'city' }, // HTDO
    { lat: -7.669, lng: 35.752, city: 'IRINGA', size: 0.04, type: 'city' }, // HTIR
    { lat: -3.429, lng: 37.074, city: 'KILIMANJARO INTERNATIONAL', size: 0.04, type: 'city' }, // HTKJ
    { lat: -3.376, lng: 35.818, city: 'LAKE MANYARA', size: 0.04, type: 'city' }, // HTLM
    { lat: -3.514, lng: 33.619, city: 'MWADUI', size: 0.04, type: 'city' }, // HTMD
    { lat: -3.363, lng: 37.323, city: 'MOSHI', size: 0.04, type: 'city' }, // HTMS
    { lat: -10.339, lng: 40.182, city: 'MTWARA', size: 0.04, type: 'city' }, // HTMT
    { lat: -2.444, lng: 32.932, city: 'MWANZA', size: 0.04, type: 'city' }, // HTMW
    { lat: -6.717, lng: 38.154, city: 'NGERENGERE', size: 0.04, type: 'city' }, // HTNG
    { lat: -5.257, lng: 39.811, city: 'PEMBA', size: 0.04, type: 'city' }, // HTPE
    { lat: -5.092, lng: 39.071, city: 'TANGA', size: 0.04, type: 'city' }, // HTTG
    { lat: -6.222, lng: 39.225, city: 'ZANZIBAR', size: 0.04, type: 'city' }, // HTZA
    { lat: 0.042, lng: 32.443, city: 'ENTEBBE INTERNATIONAL', size: 0.04, type: 'city' }, // HUEN
    { lat: 2.806, lng: 32.272, city: 'GULU', size: 0.04, type: 'city' }, // HUGU
    { lat: 1.728, lng: 33.623, city: 'SOROTI', size: 0.04, type: 'city' }, // HUSO
    { lat: 32.411, lng: -99.682, city: 'ABILENE RGNL', size: 0.04, type: 'city' }, // KABI
    { lat: 41.253, lng: -70.06, city: 'NANTUCKET MEM', size: 0.04, type: 'city' }, // KACK
    { lat: 31.611, lng: -97.23, city: 'WACO RGNL', size: 0.04, type: 'city' }, // KACT
    { lat: 39.458, lng: -74.577, city: 'ATLANTIC CITY INTERNATIONAL', size: 0.04, type: 'city' }, // KACY
    { lat: 34.303, lng: -97.019, city: 'ARDMORE MUNI', size: 0.04, type: 'city' }, // KADM
    { lat: 38.811, lng: -76.867, city: 'ANDREWS AFB', size: 0.04, type: 'city' }, // KADW
    { lat: 31.327, lng: -92.548, city: 'ALEXANDRIA INTERNATIONAL', size: 0.04, type: 'city' }, // KAEX
    { lat: 33.37, lng: -81.964, city: 'AUGUSTA RGNL AT BUSH FLD', size: 0.04, type: 'city' }, // KAGS
    { lat: 41.038, lng: -81.467, city: 'AKRON FULTON INTERNATIONAL', size: 0.04, type: 'city' }, // KAKR
    { lat: 42.748, lng: -73.803, city: 'ALBANY INTERNATIONAL', size: 0.04, type: 'city' }, // KALB
    { lat: 27.741, lng: -98.027, city: 'ALICE INTERNATIONAL', size: 0.04, type: 'city' }, // KALI
    { lat: 35.219, lng: -101.706, city: 'AMARILLO INTERNATIONAL', size: 0.04, type: 'city' }, // KAMA
    { lat: 33.588, lng: -85.858, city: 'ANNISTON METROPOLITAN', size: 0.04, type: 'city' }, // KANB
    { lat: 34.495, lng: -82.709, city: 'ANDERSON RGNL', size: 0.04, type: 'city' }, // KAND
    { lat: 40.296, lng: -78.32, city: 'ALTOONA BLAIR CO', size: 0.04, type: 'city' }, // KAOO
    { lat: 39.466, lng: -76.169, city: 'PHILLIPS AAF', size: 0.04, type: 'city' }, // KAPG
    { lat: 30.038, lng: -91.884, city: 'ACADIANA REGIONAL', size: 0.04, type: 'city' }, // KARA
    { lat: 43.992, lng: -76.022, city: 'WATERTOWN INTERNATIONAL', size: 0.04, type: 'city' }, // KART
    { lat: 33.64, lng: -84.427, city: 'THE WILLIAM B HARTSFIELD ATLANTA INTERNATIONAL', size: 0.04, type: 'city' }, // KATL
    { lat: 44.321, lng: -69.797, city: 'AUGUSTA STATE', size: 0.04, type: 'city' }, // KAUG
    { lat: 30.194, lng: -97.67, city: 'AUSTIN BERGSTROM INTERNATIONAL', size: 0.04, type: 'city' }, // KAUS
    { lat: 39.136, lng: -121.436, city: 'BEALE AFB', size: 0.04, type: 'city' }, // KBAB
    { lat: 32.502, lng: -93.663, city: 'BARKSDALE AFB', size: 0.04, type: 'city' }, // KBAD
    { lat: 26.378, lng: -80.107, city: 'BOCA RATON', size: 0.04, type: 'city' }, // KBCT
    { lat: 48.728, lng: -94.612, city: 'BAUDETTE INTERNATIONAL', size: 0.04, type: 'city' }, // KBDE
    { lat: 41.939, lng: -72.683, city: 'BRADLEY INTERNATIONAL', size: 0.04, type: 'city' }, // KBDL
    { lat: 41.163, lng: -73.126, city: 'IGOR I SIKORSKY MEM', size: 0.04, type: 'city' }, // KBDR
    { lat: 42.47, lng: -71.289, city: 'LAURENCE G HANSCOM FLD', size: 0.04, type: 'city' }, // KBED
    { lat: 47.53, lng: -122.302, city: 'BOEING FLD KING CO INTERNATIONAL', size: 0.04, type: 'city' }, // KBFI
    { lat: 35.433, lng: -119.057, city: 'MEADOWS FLD', size: 0.04, type: 'city' }, // KBFL
    { lat: 30.626, lng: -88.068, city: 'MOBILE DOWNTOWN', size: 0.04, type: 'city' }, // KBFM
    { lat: 44.807, lng: -68.828, city: 'BANGOR INTERNATIONAL', size: 0.04, type: 'city' }, // KBGR
    { lat: 33.563, lng: -86.753, city: 'BIRMINGHAM INTERNATIONAL', size: 0.04, type: 'city' }, // KBHM
    { lat: 31.849, lng: -106.38, city: 'BIGGS AAF', size: 0.04, type: 'city' }, // KBIF
    { lat: 30.411, lng: -88.924, city: 'KEESLER AFB', size: 0.04, type: 'city' }, // KBIX
    { lat: 39.702, lng: -104.751, city: 'BUCKLEY AFB', size: 0.04, type: 'city' }, // KBKF
    { lat: 48.792, lng: -122.537, city: 'BELLINGHAM INTERNATIONAL', size: 0.04, type: 'city' }, // KBLI
    { lat: 38.545, lng: -89.835, city: 'SCOTT AFB MIDAMERICA', size: 0.04, type: 'city' }, // KBLV
    { lat: 36.124, lng: -86.678, city: 'NASHVILLE INTERNATIONAL', size: 0.04, type: 'city' }, // KBNA
    { lat: 43.564, lng: -116.223, city: 'BOISE AIR TERMINAL', size: 0.04, type: 'city' }, // KBOI
    { lat: 42.364, lng: -71.005, city: 'GENERAL EDWARD LAWRENCE LOGAN INTERNATIONAL', size: 0.04, type: 'city' }, // KBOS
    { lat: 29.951, lng: -94.021, city: 'SOUTHEAST TEXAS RGNL', size: 0.04, type: 'city' }, // KBPT
    { lat: 25.907, lng: -97.426, city: 'BROWNSVILLE SOUTH PADRE ISLAND INTERNATIONAL', size: 0.04, type: 'city' }, // KBRO
    { lat: 30.533, lng: -91.149, city: 'BATON ROUGE METRO RYAN FLD', size: 0.04, type: 'city' }, // KBTR
    { lat: 44.472, lng: -73.153, city: 'BURLINGTON INTERNATIONAL', size: 0.04, type: 'city' }, // KBTV
    { lat: 42.94, lng: -78.732, city: 'BUFFALO NIAGARA INTERNATIONAL', size: 0.04, type: 'city' }, // KBUF
    { lat: 34.201, lng: -118.359, city: 'BURBANK GLENDALE PASADENA', size: 0.04, type: 'city' }, // KBUR
    { lat: 39.175, lng: -76.668, city: 'BALTIMORE WASHINGTON INTERNATIONAL', size: 0.04, type: 'city' }, // KBWI
    { lat: 35.964, lng: -89.943, city: 'ARKANSAS INTERNATIONAL', size: 0.04, type: 'city' }, // KBYH
    { lat: 35.28, lng: -116.63, city: 'BICYCLE LAKE AAF', size: 0.04, type: 'city' }, // KBYS
    { lat: 33.939, lng: -81.119, city: 'COLUMBIA METROPOLITAN', size: 0.04, type: 'city' }, // KCAE
    { lat: 46.871, lng: -68.018, city: 'CARIBOU MUNI', size: 0.04, type: 'city' }, // KCAR
    { lat: 33.644, lng: -88.444, city: 'COLUMBUS AFB', size: 0.04, type: 'city' }, // KCBM
    { lat: 37.701, lng: -113.099, city: 'CEDAR CITY RGNL', size: 0.04, type: 'city' }, // KCDC
    { lat: 34.434, lng: -100.288, city: 'CHILDRESS MUNI', size: 0.04, type: 'city' }, // KCDS
    { lat: 42.198, lng: -72.534, city: 'WESTOVER ARB METROPOLITAN', size: 0.04, type: 'city' }, // KCEF
    { lat: 30.779, lng: -86.522, city: 'BOB SIKES', size: 0.04, type: 'city' }, // KCEW
    { lat: 30.716, lng: -96.331, city: 'COULTER FLD', size: 0.04, type: 'city' }, // KCFD
    { lat: 35.035, lng: -85.204, city: 'LOVELL FLD', size: 0.04, type: 'city' }, // KCHA
    { lat: 32.899, lng: -80.04, city: 'CHARLESTON AFB INTERNATIONAL', size: 0.04, type: 'city' }, // KCHS
    { lat: 39.795, lng: -121.858, city: 'CHICO MUNI', size: 0.04, type: 'city' }, // KCIC
    { lat: 41.412, lng: -81.85, city: 'CLEVELAND HOPKINS INTERNATIONAL', size: 0.04, type: 'city' }, // KCLE
    { lat: 30.588, lng: -96.364, city: 'EASTERWOOD FLD', size: 0.04, type: 'city' }, // KCLL
    { lat: 35.214, lng: -80.943, city: 'CHARLOTTE DOUGLAS INTERNATIONAL', size: 0.04, type: 'city' }, // KCLT
    { lat: 39.998, lng: -82.892, city: 'PORT COLUMBUS INTERNATIONAL', size: 0.04, type: 'city' }, // KCMH
    { lat: 32.337, lng: -104.263, city: 'CAVERN CITY AIR TERMINAL', size: 0.04, type: 'city' }, // KCNM
    { lat: 31.638, lng: -97.074, city: 'TSTC WACO', size: 0.04, type: 'city' }, // KCNW
    { lat: 28.235, lng: -80.61, city: 'PATRICK AFB', size: 0.04, type: 'city' }, // KCOF
    { lat: 38.806, lng: -104.7, city: 'CITY OF COLORADO SPRINGS MUNI', size: 0.04, type: 'city' }, // KCOS
    { lat: 28.458, lng: -99.22, city: 'COTULLA LA SALLE CO', size: 0.04, type: 'city' }, // KCOT
    { lat: 38.818, lng: -92.219, city: 'COLUMBIA RGNL', size: 0.04, type: 'city' }, // KCOU
    { lat: 42.908, lng: -106.464, city: 'NATRONA CO INTERNATIONAL', size: 0.04, type: 'city' }, // KCPR
    { lat: 27.77, lng: -97.501, city: 'CORPUS CHRISTI INTERNATIONAL', size: 0.04, type: 'city' }, // KCRP
    { lat: 48.608, lng: -112.376, city: 'CUT BANK MUNI', size: 0.04, type: 'city' }, // KCTB
    { lat: 39.046, lng: -84.662, city: 'CINCINNATI NORTHERN KENTUCKY INTERNATIONAL', size: 0.04, type: 'city' }, // KCVG
    { lat: 34.383, lng: -103.322, city: 'CANNON AFB', size: 0.04, type: 'city' }, // KCVS
    { lat: 32.669, lng: -115.513, city: 'CALEXICO INTERNATIONAL', size: 0.04, type: 'city' }, // KCXL
    { lat: 30.352, lng: -95.414, city: 'MONTGOMERY CO', size: 0.04, type: 'city' }, // KCXO
    { lat: 41.156, lng: -104.812, city: 'CHEYENNE', size: 0.04, type: 'city' }, // KCYS
    { lat: 32.847, lng: -96.852, city: 'DALLAS LOVE FLD', size: 0.04, type: 'city' }, // KDAL
    { lat: 39.902, lng: -84.219, city: 'JAMES M COX DAYTON INTERNATIONAL', size: 0.04, type: 'city' }, // KDAY
    { lat: 38.852, lng: -77.037, city: 'RONALD REAGAN WASHINGTON NATIONAL', size: 0.04, type: 'city' }, // KDCA
    { lat: 39.858, lng: -104.667, city: 'DENVER INTERNATIONAL', size: 0.04, type: 'city' }, // KDEN
    { lat: 42.409, lng: -83.01, city: 'DETROIT CITY', size: 0.04, type: 'city' }, // KDET
    { lat: 32.896, lng: -97.037, city: 'DALLAS FORT WORTH INTERNATIONAL', size: 0.04, type: 'city' }, // KDFW
    { lat: 31.321, lng: -85.449, city: 'DOTHAN RGNL', size: 0.04, type: 'city' }, // KDHN
    { lat: 36.023, lng: -102.547, city: 'DALHART MUNI', size: 0.04, type: 'city' }, // KDHT
    { lat: 29.359, lng: -100.778, city: 'LAUGHLIN AFB', size: 0.04, type: 'city' }, // KDLF
    { lat: 46.842, lng: -92.194, city: 'DULUTH INTERNATIONAL', size: 0.04, type: 'city' }, // KDLH
    { lat: 32.166, lng: -110.883, city: 'DAVIS MONTHAN AFB', size: 0.04, type: 'city' }, // KDMA
    { lat: 39.13, lng: -75.466, city: 'DOVER AFB', size: 0.04, type: 'city' }, // KDOV
    { lat: 41.908, lng: -88.249, city: 'DU PAGE', size: 0.04, type: 'city' }, // KDPA
    { lat: 30.832, lng: -93.34, city: 'BEAUREGARD PARISH', size: 0.04, type: 'city' }, // KDRI
    { lat: 37.151, lng: -107.754, city: 'DURANGO LA PLATA CO', size: 0.04, type: 'city' }, // KDRO
    { lat: 29.373, lng: -100.926, city: 'DEL RIO INTERNATIONAL', size: 0.04, type: 'city' }, // KDRT
    { lat: 41.534, lng: -93.663, city: 'DES MOINES INTERNATIONAL', size: 0.04, type: 'city' }, // KDSM
    { lat: 42.212, lng: -83.353, city: 'DETROIT METRO WAYNE CO', size: 0.04, type: 'city' }, // KDTW
    { lat: 31.469, lng: -109.604, city: 'BISBEE DOUGLAS INTERNATIONAL', size: 0.04, type: 'city' }, // KDUG
    { lat: 32.421, lng: -99.854, city: 'DYESS AFB', size: 0.04, type: 'city' }, // KDYS
    { lat: 36.261, lng: -76.174, city: 'ELIZABETH CITY CGAS RGNL', size: 0.04, type: 'city' }, // KECG
    { lat: 34.905, lng: -117.884, city: 'EDWARDS AFB', size: 0.04, type: 'city' }, // KEDW
    { lat: 29.607, lng: -95.159, city: 'ELLINGTON FLD', size: 0.04, type: 'city' }, // KEFD
    { lat: 28.7, lng: -100.479, city: 'EAGLE PASS MUNI', size: 0.04, type: 'city' }, // KEGP
    { lat: 38.889, lng: -79.857, city: 'ELKINS RANDOLPH CO JENNINGS RANDOLPH', size: 0.04, type: 'city' }, // KEKN
    { lat: 33.221, lng: -92.813, city: 'SOUTH ARKANSAS RGNL AT GOODWIN FLD', size: 0.04, type: 'city' }, // KELD
    { lat: 31.807, lng: -106.378, city: 'EL PASO INTERNATIONAL', size: 0.04, type: 'city' }, // KELP
    { lat: 36.34, lng: -97.916, city: 'VANCE AFB', size: 0.04, type: 'city' }, // KEND
    { lat: 40.719, lng: -114.031, city: 'WENDOVER', size: 0.04, type: 'city' }, // KENV
    { lat: 31.395, lng: -92.296, city: 'ESLER RGNL', size: 0.04, type: 'city' }, // KESF
    { lat: 35.073, lng: -77.043, city: 'CRAVEN CO RGNL', size: 0.04, type: 'city' }, // KEWN
    { lat: 40.692, lng: -74.169, city: 'NEWARK LIBERTY INTERNATIONAL', size: 0.04, type: 'city' }, // KEWR
    { lat: 24.556, lng: -81.759, city: 'KEY WEST INTERNATIONAL', size: 0.04, type: 'city' }, // KEYW
    { lat: 37.133, lng: -76.609, city: 'FELKER AAF', size: 0.04, type: 'city' }, // KFAF
    { lat: 36.776, lng: -119.718, city: 'FRESNO YOSEMITE INTERNATIONAL', size: 0.04, type: 'city' }, // KFAT
    { lat: 38.678, lng: -104.756, city: 'BUTTS AAF', size: 0.04, type: 'city' }, // KFCS
    { lat: 39.826, lng: -84.048, city: 'WRIGHT PATTERSON AFB', size: 0.04, type: 'city' }, // KFFO
    { lat: 31.588, lng: -110.344, city: 'SIERRA VISTA MUNI LIBBY AAF', size: 0.04, type: 'city' }, // KFHU
    { lat: 26.072, lng: -80.153, city: 'FORT LAUDERDALE HOLLYWOOD INTERNATIONAL', size: 0.04, type: 'city' }, // KFLL
    { lat: 34.185, lng: -79.724, city: 'FLORENCE RGNL', size: 0.04, type: 'city' }, // KFLO
    { lat: 39.368, lng: -94.914, city: 'SHERMAN AAF', size: 0.04, type: 'city' }, // KFLV
    { lat: 39.085, lng: -76.759, city: 'TIPTON', size: 0.04, type: 'city' }, // KFME
    { lat: 41.658, lng: -70.521, city: 'OTIS ANGB', size: 0.04, type: 'city' }, // KFMH
    { lat: 36.741, lng: -108.23, city: 'FOUR CORNERS RGNL', size: 0.04, type: 'city' }, // KFMN
    { lat: 26.586, lng: -81.863, city: 'PAGE FLD', size: 0.04, type: 'city' }, // KFMY
    { lat: 42.551, lng: -94.193, city: 'FORT DODGE RGNL', size: 0.04, type: 'city' }, // KFOD
    { lat: 38.951, lng: -95.664, city: 'FORBES FLD', size: 0.04, type: 'city' }, // KFOE
    { lat: 40.844, lng: -72.632, city: 'THE FRANCIS S GABRESKI', size: 0.04, type: 'city' }, // KFOK
    { lat: 39.055, lng: -96.764, city: 'MARSHALL AAF', size: 0.04, type: 'city' }, // KFRI
    { lat: 34.65, lng: -98.402, city: 'HENRY POST AAF', size: 0.04, type: 'city' }, // KFSI
    { lat: 35.336, lng: -94.367, city: 'FORT SMITH RGNL', size: 0.04, type: 'city' }, // KFSM
    { lat: 37.907, lng: -85.972, city: 'GODMAN AAF', size: 0.04, type: 'city' }, // KFTK
    { lat: 32.82, lng: -97.362, city: 'FORT WORTH MEACHAM INTERNATIONAL', size: 0.04, type: 'city' }, // KFTW
    { lat: 26.197, lng: -80.171, city: 'FORT LAUDERDALE EXECUTIVE', size: 0.04, type: 'city' }, // KFXE
    { lat: 36.005, lng: -94.17, city: 'DRAKE FLD', size: 0.04, type: 'city' }, // KFYV
    { lat: 36.295, lng: -99.776, city: 'GAGE', size: 0.04, type: 'city' }, // KGAG
    { lat: 37.927, lng: -100.724, city: 'GARDEN CITY RGNL', size: 0.04, type: 'city' }, // KGCK
    { lat: 47.62, lng: -117.534, city: 'SPOKANE INTERNATIONAL', size: 0.04, type: 'city' }, // KGEG
    { lat: 47.949, lng: -97.176, city: 'GRAND FORKS INTERNATIONAL', size: 0.04, type: 'city' }, // KGFK
    { lat: 32.385, lng: -94.711, city: 'EAST TEXAS RGNL', size: 0.04, type: 'city' }, // KGGG
    { lat: 29.265, lng: -94.86, city: 'SCHOLES INTERNATIONAL AT GALVESTON', size: 0.04, type: 'city' }, // KGLS
    { lat: 35.165, lng: -107.901, city: 'GRANTS MILAN MUNI', size: 0.04, type: 'city' }, // KGNT
    { lat: 29.69, lng: -82.272, city: 'GAINESVILLE RGNL', size: 0.04, type: 'city' }, // KGNV
    { lat: 44.485, lng: -88.129, city: 'AUSTIN STRAUBEL INTERNATIONAL', size: 0.04, type: 'city' }, // KGRB
    { lat: 47.079, lng: -122.581, city: 'GRAY AAF', size: 0.04, type: 'city' }, // KGRF
    { lat: 31.067, lng: -97.829, city: 'ROBERT GRAY AAF', size: 0.04, type: 'city' }, // KGRK
    { lat: 42.881, lng: -85.523, city: 'GERALD R FORD INTERNATIONAL', size: 0.04, type: 'city' }, // KGRR
    { lat: 35.339, lng: -77.961, city: 'SEYMOUR JOHNSON AFB', size: 0.04, type: 'city' }, // KGSB
    { lat: 44.056, lng: -75.719, city: 'WHEELER SACK AAF', size: 0.04, type: 'city' }, // KGTB
    { lat: 47.482, lng: -111.371, city: 'GREAT FALLS INTERNATIONAL', size: 0.04, type: 'city' }, // KGTF
    { lat: 40.648, lng: -86.152, city: 'GRISSOM ARB', size: 0.04, type: 'city' }, // KGUS
    { lat: 33.068, lng: -96.065, city: 'MAJORS', size: 0.04, type: 'city' }, // KGVT
    { lat: 38.843, lng: -94.561, city: 'RICHARDS GEBAUR MEMORIAL', size: 0.04, type: 'city' }, // KGVW
    { lat: 33.494, lng: -90.084, city: 'GREENWOOD LEFLORE', size: 0.04, type: 'city' }, // KGWO
    { lat: 34.991, lng: -99.051, city: 'HOBART MUNI', size: 0.04, type: 'city' }, // KHBR
    { lat: 41.736, lng: -72.65, city: 'HARTFORD BRAINARD', size: 0.04, type: 'city' }, // KHFD
    { lat: 33.923, lng: -118.335, city: 'JACK NORTHROP FLD HAWTHORNE MUNI', size: 0.04, type: 'city' }, // KHHR
    { lat: 47.386, lng: -92.839, city: 'CHISHOLM HIBBING', size: 0.04, type: 'city' }, // KHIB
    { lat: 41.124, lng: -111.973, city: 'HILL AFB', size: 0.04, type: 'city' }, // KHIF
    { lat: 35.741, lng: -81.389, city: 'HICKORY RGNL', size: 0.04, type: 'city' }, // KHKY
    { lat: 46.607, lng: -111.983, city: 'HELENA RGNL', size: 0.04, type: 'city' }, // KHLN
    { lat: 31.139, lng: -97.714, city: 'HOOD AAF', size: 0.04, type: 'city' }, // KHLR
    { lat: 32.852, lng: -106.106, city: 'HOLLOMAN AFB', size: 0.04, type: 'city' }, // KHMN
    { lat: 32.688, lng: -103.217, city: 'LEA CO RGNL', size: 0.04, type: 'city' }, // KHOB
    { lat: 44.385, lng: -98.228, city: 'HURON RGNL', size: 0.04, type: 'city' }, // KHON
    { lat: 36.668, lng: -87.496, city: 'CAMPBELL AAF', size: 0.04, type: 'city' }, // KHOP
    { lat: 29.645, lng: -95.279, city: 'WILLIAM P HOBBY', size: 0.04, type: 'city' }, // KHOU
    { lat: 41.067, lng: -73.707, city: 'WESTCHESTER CO', size: 0.04, type: 'city' }, // KHPN
    { lat: 26.228, lng: -97.654, city: 'VALLEY INTERNATIONAL', size: 0.04, type: 'city' }, // KHRL
    { lat: 36.261, lng: -93.155, city: 'BOONE CO', size: 0.04, type: 'city' }, // KHRO
    { lat: 30.428, lng: -86.689, city: 'HURLBURT FLD', size: 0.04, type: 'city' }, // KHRT
    { lat: 25.488, lng: -80.384, city: 'HOMESTEAD ARB', size: 0.04, type: 'city' }, // KHST
    { lat: 44.36, lng: -84.671, city: 'ROSCOMMON CO', size: 0.04, type: 'city' }, // KHTL
    { lat: 34.679, lng: -86.685, city: 'REDSTONE AAF', size: 0.04, type: 'city' }, // KHUA
    { lat: 39.451, lng: -87.307, city: 'TERRE HAUTE INTERNATIONAL HULMAN FLD', size: 0.04, type: 'city' }, // KHUF
    { lat: 46.123, lng: -67.792, city: 'HOULTON INTERNATIONAL', size: 0.04, type: 'city' }, // KHUL
    { lat: 48.543, lng: -109.762, city: 'HAVRE CITY CO', size: 0.04, type: 'city' }, // KHVR
    { lat: 26.001, lng: -80.24, city: 'NORTH PERRY', size: 0.04, type: 'city' }, // KHWO
    { lat: 37.623, lng: -97.267, city: 'MC CONNELL AFB', size: 0.04, type: 'city' }, // KIAB
    { lat: 38.944, lng: -77.456, city: 'WASHINGTON DULLES INTERNATIONAL', size: 0.04, type: 'city' }, // KIAD
    { lat: 43.107, lng: -78.946, city: 'NIAGARA FALLS INTERNATIONAL', size: 0.04, type: 'city' }, // KIAG
    { lat: 29.98, lng: -95.34, city: 'GEORGE BUSH INTCNTL HOUSTON', size: 0.04, type: 'city' }, // KIAH
    { lat: 37.65, lng: -97.433, city: 'WICHITA MID CONTINENT', size: 0.04, type: 'city' }, // KICT
    { lat: 41.071, lng: -87.846, city: 'GREATER KANKAKEE', size: 0.04, type: 'city' }, // KIKK
    { lat: 35.04, lng: -106.609, city: 'ALBUQUERQUE INTERNATIONAL SUNPORT', size: 0.04, type: 'city' }, // KIKR
    { lat: 39.679, lng: -75.606, city: 'NEW CASTLE CO', size: 0.04, type: 'city' }, // KILG
    { lat: 34.271, lng: -77.903, city: 'WILMINGTON INTERNATIONAL', size: 0.04, type: 'city' }, // KILM
    { lat: 39.717, lng: -86.294, city: 'INDIANAPOLIS INTERNATIONAL', size: 0.04, type: 'city' }, // KIND
    { lat: 31.779, lng: -103.201, city: 'WINKLER CO', size: 0.04, type: 'city' }, // KINK
    { lat: 48.566, lng: -93.403, city: 'FALLS INTERNATIONAL', size: 0.04, type: 'city' }, // KINL
    { lat: 36.587, lng: -115.673, city: 'INDIAN SPRINGS AF AUX', size: 0.04, type: 'city' }, // KINS
    { lat: 36.134, lng: -80.222, city: 'SMITH REYNOLDS', size: 0.04, type: 'city' }, // KINT
    { lat: 32.834, lng: -115.579, city: 'IMPERIAL CO', size: 0.04, type: 'city' }, // KIPL
    { lat: 41.242, lng: -76.921, city: 'WILLIAMSPORT RGNL', size: 0.04, type: 'city' }, // KIPT
    { lat: 48.178, lng: -103.642, city: 'SLOULIN FLD INTERNATIONAL', size: 0.04, type: 'city' }, // KISN
    { lat: 40.795, lng: -73.1, city: 'LONG ISLAND MAC ARTHUR', size: 0.04, type: 'city' }, // KISP
    { lat: 32.311, lng: -90.076, city: 'JACKSON INTERNATIONAL', size: 0.04, type: 'city' }, // KJAN
    { lat: 30.494, lng: -81.688, city: 'JACKSONVILLE INTERNATIONAL', size: 0.04, type: 'city' }, // KJAX
    { lat: 35.832, lng: -90.646, city: 'JONESBORO MUNI', size: 0.04, type: 'city' }, // KJBR
    { lat: 40.64, lng: -73.779, city: 'JOHN F KENNEDY INTERNATIONAL', size: 0.04, type: 'city' }, // KJFK
    { lat: 42.779, lng: -84.587, city: 'CAPITAL CITY', size: 0.04, type: 'city' }, // KLAN
    { lat: 36.08, lng: -115.152, city: 'MC CARRAN INTERNATIONAL', size: 0.04, type: 'city' }, // KLAS
    { lat: 33.942, lng: -118.408, city: 'LOS ANGELES INTERNATIONAL', size: 0.04, type: 'city' }, // KLAX
    { lat: 33.664, lng: -101.823, city: 'LUBBOCK INTERNATIONAL', size: 0.04, type: 'city' }, // KLBB
    { lat: 30.126, lng: -93.223, city: 'LAKE CHARLES RGNL', size: 0.04, type: 'city' }, // KLCH
    { lat: 39.814, lng: -82.928, city: 'RICKENBACKER INTERNATIONAL', size: 0.04, type: 'city' }, // KLCK
    { lat: 37.083, lng: -76.36, city: 'LANGLEY AFB', size: 0.04, type: 'city' }, // KLFI
    { lat: 31.234, lng: -94.75, city: 'ANGELINA CO', size: 0.04, type: 'city' }, // KLFK
    { lat: 30.205, lng: -91.987, city: 'LAFAYETTE RGNL', size: 0.04, type: 'city' }, // KLFT
    { lat: 40.777, lng: -73.872, city: 'LA GUARDIA', size: 0.04, type: 'city' }, // KLGA
    { lat: 33.818, lng: -118.151, city: 'LONG BEACH', size: 0.04, type: 'city' }, // KLGB
    { lat: 31.889, lng: -81.562, city: 'WRIGHT AAF', size: 0.04, type: 'city' }, // KLHW
    { lat: 34.729, lng: -92.224, city: 'ADAMS FLD', size: 0.04, type: 'city' }, // KLIT
    { lat: 26.593, lng: -80.085, city: 'PALM BEACH CO PARK', size: 0.04, type: 'city' }, // KLNA
    { lat: 40.851, lng: -96.759, city: 'LINCOLN MUNI', size: 0.04, type: 'city' }, // KLNK
    { lat: 38.228, lng: -85.664, city: 'BOWMAN FLD', size: 0.04, type: 'city' }, // KLOU
    { lat: 27.544, lng: -99.461, city: 'LAREDO INTERNATIONAL', size: 0.04, type: 'city' }, // KLRD
    { lat: 34.918, lng: -92.146, city: 'LITTLE ROCK AFB', size: 0.04, type: 'city' }, // KLRF
    { lat: 32.337, lng: -84.991, city: 'LAWSON AAF', size: 0.04, type: 'city' }, // KLSF
    { lat: 36.236, lng: -115.034, city: 'NELLIS AFB', size: 0.04, type: 'city' }, // KLSV
    { lat: 34.667, lng: -99.267, city: 'ALTUS AFB', size: 0.04, type: 'city' }, // KLTS
    { lat: 33.535, lng: -112.383, city: 'LUKE AFB', size: 0.04, type: 'city' }, // KLUF
    { lat: 39.103, lng: -84.419, city: 'CINCINNATI MUNI LUNKEN FLD', size: 0.04, type: 'city' }, // KLUK
    { lat: 31.942, lng: -102.202, city: 'MIDLAND INTERNATIONAL', size: 0.04, type: 'city' }, // KMAF
    { lat: 38.667, lng: -121.401, city: 'MC CLELLAN AFLD', size: 0.04, type: 'city' }, // KMCC
    { lat: 27.849, lng: -82.521, city: 'MACDILL AFB', size: 0.04, type: 'city' }, // KMCF
    { lat: 39.297, lng: -94.714, city: 'KANSAS CITY INTERNATIONAL', size: 0.04, type: 'city' }, // KMCI
    { lat: 32.693, lng: -83.649, city: 'MIDDLE GEORGIA RGNL', size: 0.04, type: 'city' }, // KMCN
    { lat: 28.429, lng: -81.316, city: 'ORLANDO INTERNATIONAL', size: 0.04, type: 'city' }, // KMCO
    { lat: 40.193, lng: -76.763, city: 'HARRISBURG INTERNATIONAL', size: 0.04, type: 'city' }, // KMDT
    { lat: 41.786, lng: -87.752, city: 'CHICAGO MIDWAY INTERNATIONAL', size: 0.04, type: 'city' }, // KMDW
    { lat: 35.042, lng: -89.977, city: 'MEMPHIS INTERNATIONAL', size: 0.04, type: 'city' }, // KMEM
    { lat: 37.38, lng: -120.568, city: 'CASTLE', size: 0.04, type: 'city' }, // KMER
    { lat: 26.176, lng: -98.239, city: 'MC ALLEN MILLER INTERNATIONAL', size: 0.04, type: 'city' }, // KMFE
    { lat: 33.915, lng: -84.516, city: 'DOBBINS ARB', size: 0.04, type: 'city' }, // KMGE
    { lat: 38.554, lng: -121.297, city: 'SACRAMENTO MATHER', size: 0.04, type: 'city' }, // KMHR
    { lat: 25.793, lng: -80.291, city: 'MIAMI INTERNATIONAL', size: 0.04, type: 'city' }, // KMIA
    { lat: 48.416, lng: -101.357, city: 'MINOT AFB', size: 0.04, type: 'city' }, // KMIB
    { lat: 39.368, lng: -75.072, city: 'MILLVILLE MUNI', size: 0.04, type: 'city' }, // KMIV
    { lat: 42.947, lng: -87.896, city: 'GENERAL MITCHELL INTERNATIONAL', size: 0.04, type: 'city' }, // KMKE
    { lat: 35.6, lng: -88.916, city: 'MC KELLAR SIPES RGNL', size: 0.04, type: 'city' }, // KMKL
    { lat: 35.657, lng: -95.361, city: 'DAVIS FLD', size: 0.04, type: 'city' }, // KMKO
    { lat: 28.103, lng: -80.645, city: 'MELBOURNE INTERNATIONAL', size: 0.04, type: 'city' }, // KMLB
    { lat: 34.882, lng: -95.783, city: 'MC ALESTER RGNL', size: 0.04, type: 'city' }, // KMLC
    { lat: 45.648, lng: -68.686, city: 'MILLINOCKET MUNI', size: 0.04, type: 'city' }, // KMLT
    { lat: 32.511, lng: -92.037, city: 'MONROE RGNL', size: 0.04, type: 'city' }, // KMLU
    { lat: 45.194, lng: -123.136, city: 'MC MINNVILLE MUNI', size: 0.04, type: 'city' }, // KMMV
    { lat: 45.126, lng: -87.638, city: 'MENOMINEE MARINETTE TWIN CO', size: 0.04, type: 'city' }, // KMNM
    { lat: 30.691, lng: -88.243, city: 'MOBILE RGNL', size: 0.04, type: 'city' }, // KMOB
    { lat: 37.626, lng: -120.954, city: 'MODESTO CITY CO HARRY SHAM', size: 0.04, type: 'city' }, // KMOD
    { lat: 48.259, lng: -101.28, city: 'MINOT INTERNATIONAL', size: 0.04, type: 'city' }, // KMOT
    { lat: 44.203, lng: -72.562, city: 'EDWARD F KNAPP STATE', size: 0.04, type: 'city' }, // KMPV
    { lat: 46.534, lng: -87.562, city: 'SAWYER INTERNATIONAL', size: 0.04, type: 'city' }, // KMQT
    { lat: 43.14, lng: -89.337, city: 'DANE CO RGNL TRUAX FLD', size: 0.04, type: 'city' }, // KMSN
    { lat: 44.88, lng: -93.217, city: 'MINNEAPOLIS ST PAUL INTERNATIONAL', size: 0.04, type: 'city' }, // KMSP
    { lat: 44.936, lng: -74.845, city: 'MASSENA INTERNATIONAL RICHARDS FLD', size: 0.04, type: 'city' }, // KMSS
    { lat: 29.993, lng: -90.258, city: 'LOUIS ARMSTRONG NEW ORLEANS INTERNATIONAL', size: 0.04, type: 'city' }, // KMSY
    { lat: 42.613, lng: -82.832, city: 'SELFRIDGE ANGB', size: 0.04, type: 'city' }, // KMTC
    { lat: 40.435, lng: -76.569, city: 'MUIR AAF', size: 0.04, type: 'city' }, // KMUI
    { lat: 43.043, lng: -115.872, city: 'MOUNTAIN HOME AFB', size: 0.04, type: 'city' }, // KMUO
    { lat: 47.208, lng: -119.32, city: 'GRANT CO INTERNATIONAL', size: 0.04, type: 'city' }, // KMWH
    { lat: 32.781, lng: -98.06, city: 'MINERAL WELLS', size: 0.04, type: 'city' }, // KMWL
    { lat: 32.379, lng: -86.362, city: 'MAXWELL AFB', size: 0.04, type: 'city' }, // KMXF
    { lat: 33.68, lng: -78.928, city: 'MYRTLE BEACH INTERNATIONAL', size: 0.04, type: 'city' }, // KMYR
    { lat: 32.477, lng: -80.723, city: 'BEAUFORT MCAS', size: 0.04, type: 'city' }, // KNBC
    { lat: 29.825, lng: -90.035, city: 'NEW ORLEANS NAS JRB', size: 0.04, type: 'city' }, // KNBG
    { lat: 34.708, lng: -77.439, city: 'NEW RIVER MCAS', size: 0.04, type: 'city' }, // KNCA
    { lat: 40.033, lng: -74.353, city: 'LAKEHURST NAES', size: 0.04, type: 'city' }, // KNEL
    { lat: 39.416, lng: -118.701, city: 'FALLON NAS', size: 0.04, type: 'city' }, // KNFL
    { lat: 36.938, lng: -76.289, city: 'NORFOLK NS', size: 0.04, type: 'city' }, // KNGU
    { lat: 38.286, lng: -76.412, city: 'PATUXENT RIVER NAS', size: 0.04, type: 'city' }, // KNHK
    { lat: 35.688, lng: -117.691, city: 'CHINA LAKE NAWS', size: 0.04, type: 'city' }, // KNID
    { lat: 30.236, lng: -81.681, city: 'JACKSONVILLE NAS', size: 0.04, type: 'city' }, // KNIP
    { lat: 32.829, lng: -115.672, city: 'EL CENTRO NAF', size: 0.04, type: 'city' }, // KNJK
    { lat: 34.902, lng: -76.881, city: 'CHERRY POINT MCAS', size: 0.04, type: 'city' }, // KNKT
    { lat: 32.868, lng: -117.143, city: 'MIRAMAR MCAS', size: 0.04, type: 'city' }, // KNKX
    { lat: 36.333, lng: -119.952, city: 'LEMOORE NAS', size: 0.04, type: 'city' }, // KNLC
    { lat: 32.552, lng: -88.556, city: 'MERIDIAN NAS', size: 0.04, type: 'city' }, // KNMM
    { lat: 48.141, lng: -123.414, city: 'PORT ANGELES CGAS', size: 0.04, type: 'city' }, // KNOW
    { lat: 30.353, lng: -87.319, city: 'PENSACOLA NAS', size: 0.04, type: 'city' }, // KNPA
    { lat: 35.357, lng: -89.87, city: 'MILLINGTON MUNI', size: 0.04, type: 'city' }, // KNQA
    { lat: 27.507, lng: -97.81, city: 'KINGSVILLE NAS', size: 0.04, type: 'city' }, // KNQI
    { lat: 24.576, lng: -81.689, city: 'KEY WEST NAS', size: 0.04, type: 'city' }, // KNQX
    { lat: 30.724, lng: -87.022, city: 'WHITING FLD NAS NORTH', size: 0.04, type: 'city' }, // KNSE
    { lat: 34.12, lng: -119.121, city: 'POINT MUGU NAS', size: 0.04, type: 'city' }, // KNTD
    { lat: 33.706, lng: -117.827, city: 'TUSTIN MCAF', size: 0.04, type: 'city' }, // KNTK
    { lat: 36.821, lng: -76.033, city: 'OCEANA NAS', size: 0.04, type: 'city' }, // KNTU
    { lat: 37.415, lng: -122.048, city: 'MOFFETT FEDERAL AFLD', size: 0.04, type: 'city' }, // KNUQ
    { lat: 48.352, lng: -122.656, city: 'WHIDBEY ISLAND NAS', size: 0.04, type: 'city' }, // KNUW
    { lat: 34.296, lng: -116.162, city: 'TWENTYNINE PALMS EAF', size: 0.04, type: 'city' }, // KNXP
    { lat: 40.2, lng: -75.148, city: 'WILLOW GROVE NAS JRB', size: 0.04, type: 'city' }, // KNXX
    { lat: 38.502, lng: -77.305, city: 'QUANTICO MCAF', size: 0.04, type: 'city' }, // KNYG
    { lat: 30.219, lng: -81.876, city: 'CECIL FLD', size: 0.04, type: 'city' }, // KNZC
    { lat: 32.699, lng: -117.215, city: 'NORTH ISLAND NAS', size: 0.04, type: 'city' }, // KNZY
    { lat: 37.721, lng: -122.221, city: 'METROPOLITAN OAKLAND INTERNATIONAL', size: 0.04, type: 'city' }, // KOAK
    { lat: 41.118, lng: -95.913, city: 'OFFUTT AFB', size: 0.04, type: 'city' }, // KOFF
    { lat: 44.682, lng: -75.466, city: 'OGDENSBURG INTERNATIONAL', size: 0.04, type: 'city' }, // KOGS
    { lat: 35.393, lng: -97.601, city: 'WILL ROGERS WORLD', size: 0.04, type: 'city' }, // KOKC
    { lat: 31.418, lng: -110.848, city: 'NOGALES INTERNATIONAL', size: 0.04, type: 'city' }, // KOLS
    { lat: 41.302, lng: -95.894, city: 'EPPLEY AFLD', size: 0.04, type: 'city' }, // KOMA
    { lat: 34.056, lng: -117.601, city: 'ONTARIO INTERNATIONAL', size: 0.04, type: 'city' }, // KONT
    { lat: 25.907, lng: -80.278, city: 'OPA LOCKA', size: 0.04, type: 'city' }, // KOPF
    { lat: 41.979, lng: -87.904, city: 'CHICAGO OHARE INTERNATIONAL', size: 0.04, type: 'city' }, // KORD
    { lat: 36.894, lng: -76.201, city: 'NORFOLK INTERNATIONAL', size: 0.04, type: 'city' }, // KORF
    { lat: 28.545, lng: -81.333, city: 'EXECUTIVE', size: 0.04, type: 'city' }, // KORL
    { lat: 44.451, lng: -83.394, city: 'OSCODA WURTSMITH', size: 0.04, type: 'city' }, // KOSC
    { lat: 47.906, lng: -122.281, city: 'SNOHOMISH CO', size: 0.04, type: 'city' }, // KPAE
    { lat: 30.07, lng: -85.576, city: 'TYNDALL AFB', size: 0.04, type: 'city' }, // KPAM
    { lat: 34.175, lng: -91.934, city: 'GRIDER FLD', size: 0.04, type: 'city' }, // KPBF
    { lat: 44.651, lng: -73.468, city: 'PLATTSBURGH INTERNATIONAL', size: 0.04, type: 'city' }, // KPBG
    { lat: 26.683, lng: -80.096, city: 'PALM BEACH INTERNATIONAL', size: 0.04, type: 'city' }, // KPBI
    { lat: 45.589, lng: -122.597, city: 'PORTLAND INTERNATIONAL', size: 0.04, type: 'city' }, // KPDX
    { lat: 37.132, lng: -76.493, city: 'NEWPORT NEWS WILLIAMSBURG INTERNATIONAL', size: 0.04, type: 'city' }, // KPHF
    { lat: 39.872, lng: -75.241, city: 'PHILADELPHIA INTERNATIONAL', size: 0.04, type: 'city' }, // KPHL
    { lat: 42.911, lng: -82.529, city: 'ST CLAIR CO INTERNATIONAL', size: 0.04, type: 'city' }, // KPHN
    { lat: 33.434, lng: -112.008, city: 'PHOENIX SKY HARBOR INTERNATIONAL', size: 0.04, type: 'city' }, // KPHX
    { lat: 27.911, lng: -82.687, city: 'ST PETERSBURG CLEARWATER INTERNATIONAL', size: 0.04, type: 'city' }, // KPIE
    { lat: 40.491, lng: -80.233, city: 'PITTSBURGH INTERNATIONAL', size: 0.04, type: 'city' }, // KPIT
    { lat: 48.942, lng: -97.241, city: 'PEMBINA MUNI', size: 0.04, type: 'city' }, // KPMB
    { lat: 34.629, lng: -118.084, city: 'PALMDALE PROD FLT TEST INSTL AF PLT 42', size: 0.04, type: 'city' }, // KPMD
    { lat: 36.731, lng: -97.1, city: 'PONCA CITY MUNI', size: 0.04, type: 'city' }, // KPNC
    { lat: 40.082, lng: -75.011, city: 'NORTHEAST PHILADELPHIA', size: 0.04, type: 'city' }, // KPNE
    { lat: 45.56, lng: -93.608, city: 'PRINCETON MUNI', size: 0.04, type: 'city' }, // KPNM
    { lat: 30.473, lng: -87.187, city: 'PENSACOLA RGNL', size: 0.04, type: 'city' }, // KPNS
    { lat: 35.171, lng: -79.014, city: 'POPE AFB', size: 0.04, type: 'city' }, // KPOB
    { lat: 31.045, lng: -93.191, city: 'POLK AAF', size: 0.04, type: 'city' }, // KPOE
    { lat: 46.689, lng: -68.045, city: 'NORTHERN MAINE RGNL AT PRESQUE ISLE', size: 0.04, type: 'city' }, // KPQI
    { lat: 34.654, lng: -112.419, city: 'ERNEST A LOVE FLD', size: 0.04, type: 'city' }, // KPRC
    { lat: 33.829, lng: -116.507, city: 'PALM SPRINGS INTERNATIONAL', size: 0.04, type: 'city' }, // KPSP
    { lat: 28.727, lng: -96.251, city: 'PALACIOS MUNI', size: 0.04, type: 'city' }, // KPSX
    { lat: 38.289, lng: -104.496, city: 'PUEBLO MEM', size: 0.04, type: 'city' }, // KPUB
    { lat: 41.724, lng: -71.428, city: 'THEODORE FRANCIS GREEN STATE', size: 0.04, type: 'city' }, // KPVD
    { lat: 43.646, lng: -70.309, city: 'PORTLAND INTERNATIONAL JETPORT', size: 0.04, type: 'city' }, // KPWM
    { lat: 33.952, lng: -117.445, city: 'RIVERSIDE MUNI', size: 0.04, type: 'city' }, // KRAL
    { lat: 34.85, lng: -92.3, city: 'ROBINSON AAF', size: 0.04, type: 'city' }, // KRBM
    { lat: 44.145, lng: -103.103, city: 'ELLSWORTH AFB', size: 0.04, type: 'city' }, // KRCA
    { lat: 47.961, lng: -97.401, city: 'GRAND FORKS AFB', size: 0.04, type: 'city' }, // KRDR
    { lat: 35.877, lng: -78.787, city: 'RALEIGH DURHAM INTERNATIONAL', size: 0.04, type: 'city' }, // KRDU
    { lat: 37.505, lng: -77.319, city: 'RICHMOND INTERNATIONAL', size: 0.04, type: 'city' }, // KRIC
    { lat: 38.489, lng: -121.102, city: 'RANCHO MURIETA', size: 0.04, type: 'city' }, // KRIU
    { lat: 33.881, lng: -117.259, city: 'MARCH ARB', size: 0.04, type: 'city' }, // KRIV
    { lat: 43.234, lng: -75.407, city: 'GRIFFISS AIRPARK', size: 0.04, type: 'city' }, // KRME
    { lat: 29.529, lng: -98.279, city: 'RANDOLPH AFB', size: 0.04, type: 'city' }, // KRND
    { lat: 39.498, lng: -119.768, city: 'RENO TAHOE INTERNATIONAL', size: 0.04, type: 'city' }, // KRNO
    { lat: 43.119, lng: -77.672, city: 'GREATER ROCHESTER INTERNATIONAL', size: 0.04, type: 'city' }, // KROC
    { lat: 33.301, lng: -104.531, city: 'ROSWELL INDUSTRIAL AIR CENTER', size: 0.04, type: 'city' }, // KROW
    { lat: 26.536, lng: -81.755, city: 'SOUTHWEST FLORIDA INTERNATIONAL', size: 0.04, type: 'city' }, // KRSW
    { lat: 38.513, lng: -121.493, city: 'SACRAMENTO EXECUTIVE', size: 0.04, type: 'city' }, // KSAC
    { lat: 35.617, lng: -106.088, city: 'SANTA FE MUNI', size: 0.04, type: 'city' }, // KSAF
    { lat: 32.733, lng: -117.189, city: 'SAN DIEGO INTERNATIONAL LINDBERGH FLD', size: 0.04, type: 'city' }, // KSAN
    { lat: 29.534, lng: -98.47, city: 'SAN ANTONIO INTERNATIONAL', size: 0.04, type: 'city' }, // KSAT
    { lat: 32.127, lng: -81.202, city: 'SAVANNAH HILTON HEAD INTERNATIONAL', size: 0.04, type: 'city' }, // KSAV
    { lat: 46.354, lng: -87.396, city: 'SAWYER INTERNATIONAL', size: 0.04, type: 'city' }, // KSAW
    { lat: 32.608, lng: -82.369, city: 'EMANUEL CO', size: 0.04, type: 'city' }, // KSBO
    { lat: 38.34, lng: -75.51, city: 'SALISBURY OCEAN CITY WICOMICO RGNL', size: 0.04, type: 'city' }, // KSBY
    { lat: 37.894, lng: -121.239, city: 'STOCKTON METROPOLITAN', size: 0.04, type: 'city' }, // KSCK
    { lat: 47.449, lng: -122.309, city: 'SEATTLE TACOMA INTERNATIONAL', size: 0.04, type: 'city' }, // KSEA
    { lat: 32.344, lng: -86.988, city: 'CRAIG FLD', size: 0.04, type: 'city' }, // KSEM
    { lat: 47.683, lng: -117.322, city: 'FELTS FLD', size: 0.04, type: 'city' }, // KSFF
    { lat: 37.619, lng: -122.375, city: 'SAN FRANCISCO INTERNATIONAL', size: 0.04, type: 'city' }, // KSFO
    { lat: 41.921, lng: -71.491, city: 'NORTH CENTRAL STATE', size: 0.04, type: 'city' }, // KSFZ
    { lat: 32.446, lng: -93.826, city: 'SHREVEPORT RGNL', size: 0.04, type: 'city' }, // KSHV
    { lat: 37.362, lng: -121.929, city: 'NORMAN Y MINETA SAN JOSE INTERNATIONAL', size: 0.04, type: 'city' }, // KSJC
    { lat: 31.358, lng: -100.496, city: 'SAN ANGELO RGNL MATHIS FLD', size: 0.04, type: 'city' }, // KSJT
    { lat: 47.615, lng: -117.656, city: 'FAIRCHILD AFB', size: 0.04, type: 'city' }, // KSKA
    { lat: 29.384, lng: -98.581, city: 'LACKLAND AFB KELLY FLD ANNEX', size: 0.04, type: 'city' }, // KSKF
    { lat: 41.433, lng: -82.652, city: 'GRIFFING SANDUSKY', size: 0.04, type: 'city' }, // KSKY
    { lat: 40.788, lng: -111.978, city: 'SALT LAKE CITY INTERNATIONAL', size: 0.04, type: 'city' }, // KSLC
    { lat: 38.695, lng: -121.591, city: 'SACRAMENTO INTERNATIONAL', size: 0.04, type: 'city' }, // KSMF
    { lat: 33.676, lng: -117.868, city: 'JOHN WAYNE ARPT ORANGE CO', size: 0.04, type: 'city' }, // KSNA
    { lat: 45.773, lng: -122.862, city: 'SCAPPOOSE INDUSTRIAL AIRPARK', size: 0.04, type: 'city' }, // KSPB
    { lat: 27.765, lng: -82.627, city: 'ALBERT WHITTED', size: 0.04, type: 'city' }, // KSPG
    { lat: 33.989, lng: -98.492, city: 'SHEPPARD AFB WICHITA FALLS MUNI', size: 0.04, type: 'city' }, // KSPS
    { lat: 33.973, lng: -80.473, city: 'SHAW AFB', size: 0.04, type: 'city' }, // KSSC
    { lat: 38.748, lng: -90.36, city: 'LAMBERT ST LOUIS INTERNATIONAL', size: 0.04, type: 'city' }, // KSTL
    { lat: 38.263, lng: -121.927, city: 'TRAVIS AFB', size: 0.04, type: 'city' }, // KSUU
    { lat: 42.402, lng: -96.384, city: 'SIOUX GATEWAY COL BUD DAY FLD', size: 0.04, type: 'city' }, // KSUX
    { lat: 32.01, lng: -81.146, city: 'HUNTER AAF', size: 0.04, type: 'city' }, // KSVN
    { lat: 41.504, lng: -74.105, city: 'STEWART INTERNATIONAL', size: 0.04, type: 'city' }, // KSWF
    { lat: 43.111, lng: -76.106, city: 'SYRACUSE HANCOCK INTERNATIONAL', size: 0.04, type: 'city' }, // KSYR
    { lat: 38.73, lng: -93.548, city: 'WHITEMAN AFB', size: 0.04, type: 'city' }, // KSZL
    { lat: 37.741, lng: -92.141, city: 'WAYNESVILLE RGNL ARPT AT FORNEY FLD', size: 0.04, type: 'city' }, // KTBN
    { lat: 35.183, lng: -103.603, city: 'TUCUMCARI MUNI', size: 0.04, type: 'city' }, // KTCC
    { lat: 47.138, lng: -122.476, city: 'MC CHORD AFB', size: 0.04, type: 'city' }, // KTCM
    { lat: 33.237, lng: -107.272, city: 'TRUTH OR CONSEQUENCES MUNI', size: 0.04, type: 'city' }, // KTCS
    { lat: 40.85, lng: -74.061, city: 'TETERBORO', size: 0.04, type: 'city' }, // KTEB
    { lat: 35.415, lng: -97.386, city: 'TINKER AFB', size: 0.04, type: 'city' }, // KTIK
    { lat: 30.396, lng: -84.35, city: 'TALLAHASSEE RGNL', size: 0.04, type: 'city' }, // KTLH
    { lat: 25.648, lng: -80.433, city: 'KENDALL TAMIAMI EXECUTIVE', size: 0.04, type: 'city' }, // KTMB
    { lat: 25.862, lng: -80.897, city: 'DADE COLLIER TRAINING AND TRANSITION', size: 0.04, type: 'city' }, // KTNT
    { lat: 37.794, lng: -116.779, city: 'TONOPAH TEST RANGE', size: 0.04, type: 'city' }, // KTNX
    { lat: 27.975, lng: -82.533, city: 'TAMPA INTERNATIONAL', size: 0.04, type: 'city' }, // KTPA
    { lat: 40.277, lng: -74.813, city: 'TRENTON MERCER', size: 0.04, type: 'city' }, // KTTN
    { lat: 36.198, lng: -95.888, city: 'TULSA INTERNATIONAL', size: 0.04, type: 'city' }, // KTUL
    { lat: 32.116, lng: -110.941, city: 'TUCSON INTERNATIONAL', size: 0.04, type: 'city' }, // KTUS
    { lat: 33.454, lng: -93.991, city: 'TEXARKANA RGNL WEBB FLD', size: 0.04, type: 'city' }, // KTXK
    { lat: 32.354, lng: -95.402, city: 'TYLER POUNDS RGNL', size: 0.04, type: 'city' }, // KTYR
    { lat: 35.812, lng: -83.993, city: 'MC GHEE TYSON', size: 0.04, type: 'city' }, // KTYS
    { lat: 42.422, lng: -87.868, city: 'WAUKEGAN RGNL', size: 0.04, type: 'city' }, // KUGN
    { lat: 30.968, lng: -83.193, city: 'MOODY AFB', size: 0.04, type: 'city' }, // KVAD
    { lat: 34.729, lng: -120.577, city: 'VANDENBERG AFB', size: 0.04, type: 'city' }, // KVBG
    { lat: 34.593, lng: -117.379, city: 'SOUTHERN CALIFORNIA LOGISTICS', size: 0.04, type: 'city' }, // KVCV
    { lat: 30.483, lng: -86.525, city: 'EGLIN AFB', size: 0.04, type: 'city' }, // KVPS
    { lat: 27.656, lng: -80.418, city: 'VERO BEACH MUNI', size: 0.04, type: 'city' }, // KVRB
    { lat: 37.94, lng: -75.466, city: 'WALLOPS FLIGHT FACILITY', size: 0.04, type: 'city' }, // KWAL
    { lat: 32.64, lng: -83.592, city: 'ROBINS AFB', size: 0.04, type: 'city' }, // KWRB
    { lat: 40.016, lng: -74.594, city: 'MC GUIRE AFB', size: 0.04, type: 'city' }, // KWRI
    { lat: 32.341, lng: -106.403, city: 'CONDRON AAF', size: 0.04, type: 'city' }, // KWSD
    { lat: 39.008, lng: -74.908, city: 'CAPE MAY CO', size: 0.04, type: 'city' }, // KWWD
    { lat: 42.238, lng: -83.53, city: 'WILLOW RUN', size: 0.04, type: 'city' }, // KYIP
    { lat: 41.261, lng: -80.679, city: 'YOUNGSTOWN WARREN RGNL', size: 0.04, type: 'city' }, // KYNG
    { lat: 32.656, lng: -114.606, city: 'YUMA MCAS YUMA INTERNATIONAL', size: 0.04, type: 'city' }, // KYUM
    { lat: 35.083, lng: -108.792, city: 'BLACK ROCK', size: 0.04, type: 'city' }, // KZUN
    { lat: 41.415, lng: 19.721, city: 'TIRANA RINAS', size: 0.04, type: 'city' }, // LATI
    { lat: 42.569, lng: 27.514, city: 'BURGAS', size: 0.04, type: 'city' }, // LBBG
    { lat: 43.151, lng: 25.713, city: 'GORNA ORYAHOVITSA', size: 0.04, type: 'city' }, // LBGO
    { lat: 42.068, lng: 24.851, city: 'PLOVDIV', size: 0.04, type: 'city' }, // LBPD
    { lat: 42.695, lng: 23.406, city: 'SOFIA', size: 0.04, type: 'city' }, // LBSF
    { lat: 42.377, lng: 25.655, city: 'STARA ZAGORA', size: 0.04, type: 'city' }, // LBSZ
    { lat: 43.232, lng: 27.825, city: 'VARNA', size: 0.04, type: 'city' }, // LBWN
    { lat: 34.875, lng: 33.625, city: 'LARNACA', size: 0.04, type: 'city' }, // LCLK
    { lat: 34.718, lng: 32.486, city: 'PAPHOS INTERNATIONAL', size: 0.04, type: 'city' }, // LCPH
    { lat: 34.59, lng: 32.988, city: 'AKROTIRI', size: 0.04, type: 'city' }, // LCRA
    { lat: 42.561, lng: 18.268, city: 'DUBROVNIK', size: 0.04, type: 'city' }, // LDDU
    { lat: 45.542, lng: 18.636, city: 'CEPIN', size: 0.04, type: 'city' }, // LDOC
    { lat: 45.463, lng: 18.811, city: 'OSIJEK', size: 0.04, type: 'city' }, // LDOS
    { lat: 44.893, lng: 13.922, city: 'PULA', size: 0.04, type: 'city' }, // LDPL
    { lat: 45.379, lng: 14.504, city: 'GROBNICKO POLJE', size: 0.04, type: 'city' }, // LDRG
    { lat: 45.217, lng: 14.57, city: 'RIJEKA', size: 0.04, type: 'city' }, // LDRI
    { lat: 43.539, lng: 16.298, city: 'SPLIT', size: 0.04, type: 'city' }, // LDSP
    { lat: 46.295, lng: 16.381, city: 'VARAZDIN', size: 0.04, type: 'city' }, // LDVA
    { lat: 45.743, lng: 16.069, city: 'ZAGREB', size: 0.04, type: 'city' }, // LDZA
    { lat: 44.108, lng: 15.347, city: 'ZADAR', size: 0.04, type: 'city' }, // LDZD
    { lat: 44.557, lng: 15.774, city: 'UDBINA', size: 0.04, type: 'city' }, // LDZU
    { lat: 38.948, lng: -1.863, city: 'ALBACETE', size: 0.04, type: 'city' }, // LEAB
    { lat: 38.282, lng: -0.558, city: 'ALICANTE', size: 0.04, type: 'city' }, // LEAL
    { lat: 36.844, lng: -2.37, city: 'ALMERIA', size: 0.04, type: 'city' }, // LEAM
    { lat: 43.563, lng: -6.034, city: 'ASTURIAS', size: 0.04, type: 'city' }, // LEAS
    { lat: 37.842, lng: -4.849, city: 'CORDOBA', size: 0.04, type: 'city' }, // LEBA
    { lat: 43.301, lng: -2.911, city: 'BILBAO', size: 0.04, type: 'city' }, // LEBB
    { lat: 42.358, lng: -3.621, city: 'BURGOS', size: 0.04, type: 'city' }, // LEBG
    { lat: 41.297, lng: 2.078, city: 'BARCELONA', size: 0.04, type: 'city' }, // LEBL
    { lat: 38.891, lng: -6.821, city: 'TALAVERA LA REAL', size: 0.04, type: 'city' }, // LEBZ
    { lat: 43.302, lng: -8.377, city: 'A CORUNA', size: 0.04, type: 'city' }, // LECO
    { lat: 37.133, lng: -3.636, city: 'ARMILLA', size: 0.04, type: 'city' }, // LEGA
    { lat: 41.901, lng: 2.76, city: 'GIRONA', size: 0.04, type: 'city' }, // LEGE
    { lat: 37.189, lng: -3.777, city: 'GRANADA', size: 0.04, type: 'city' }, // LEGR
    { lat: 40.294, lng: -3.724, city: 'GETAFE', size: 0.04, type: 'city' }, // LEGT
    { lat: 38.873, lng: 1.373, city: 'IBIZA', size: 0.04, type: 'city' }, // LEIB
    { lat: 36.744, lng: -6.06, city: 'JEREZ', size: 0.04, type: 'city' }, // LEJR
    { lat: 37.775, lng: -0.812, city: 'MURCIA SAN JAVIER', size: 0.04, type: 'city' }, // LELC
    { lat: 42.589, lng: -5.656, city: 'LEON', size: 0.04, type: 'city' }, // LELN
    { lat: 40.472, lng: -3.561, city: 'BARAJAS', size: 0.04, type: 'city' }, // LEMD
    { lat: 36.674, lng: -4.499, city: 'MALAGA', size: 0.04, type: 'city' }, // LEMG
    { lat: 39.863, lng: 4.219, city: 'MENORCA', size: 0.04, type: 'city' }, // LEMH
    { lat: 40.417, lng: -3.5, city: 'MADRID MET CENTER', size: 0.04, type: 'city' }, // LEMM
    { lat: 37.175, lng: -5.616, city: 'MORON AB', size: 0.04, type: 'city' }, // LEMO
    { lat: 39.938, lng: -3.503, city: 'OCANA', size: 0.04, type: 'city' }, // LEOC
    { lat: 39.55, lng: 2.733, city: 'PALMA DE MALLORCA', size: 0.04, type: 'city' }, // LEPA
    { lat: 42.77, lng: -1.646, city: 'PAMPLONA', size: 0.04, type: 'city' }, // LEPP
    { lat: 37.951, lng: -1.23, city: 'ALCANTARILLA', size: 0.04, type: 'city' }, // LERI
    { lat: 41.147, lng: 1.167, city: 'REUS', size: 0.04, type: 'city' }, // LERS
    { lat: 36.645, lng: -6.349, city: 'ROTA NS', size: 0.04, type: 'city' }, // LERT
    { lat: 40.952, lng: -5.502, city: 'SALAMANCA', size: 0.04, type: 'city' }, // LESA
    { lat: 39.599, lng: 2.703, city: 'SON BONET', size: 0.04, type: 'city' }, // LESB
    { lat: 39.552, lng: 2.739, city: 'PALMA DE MALLORCA', size: 0.04, type: 'city' }, // LESJ
    { lat: 39.862, lng: 4.258, city: 'SAN LUIS', size: 0.04, type: 'city' }, // LESL
    { lat: 43.356, lng: -1.791, city: 'SAN SEBASTIAN', size: 0.04, type: 'city' }, // LESO
    { lat: 42.896, lng: -8.415, city: 'SANTIAGO', size: 0.04, type: 'city' }, // LEST
    { lat: 42.339, lng: 1.409, city: 'SEO DE URGEL', size: 0.04, type: 'city' }, // LESU
    { lat: 40.487, lng: -3.458, city: 'TORREJON', size: 0.04, type: 'city' }, // LETO
    { lat: 39.489, lng: -0.481, city: 'VALENCIA', size: 0.04, type: 'city' }, // LEVC
    { lat: 41.706, lng: -4.852, city: 'VALLADOLID', size: 0.04, type: 'city' }, // LEVD
    { lat: 40.371, lng: -3.785, city: 'CUATRO VIENTOS', size: 0.04, type: 'city' }, // LEVS
    { lat: 42.883, lng: -2.724, city: 'VITORIA', size: 0.04, type: 'city' }, // LEVT
    { lat: 42.232, lng: -8.627, city: 'VIGO', size: 0.04, type: 'city' }, // LEVX
    { lat: 43.427, lng: -3.82, city: 'SANTANDER', size: 0.04, type: 'city' }, // LEXJ
    { lat: 41.666, lng: -1.041, city: 'ZARAGOZA AB', size: 0.04, type: 'city' }, // LEZG
    { lat: 37.418, lng: -5.893, city: 'SEVILLA', size: 0.04, type: 'city' }, // LEZL
    { lat: 50.962, lng: 1.955, city: 'CALAIS DUNKERQUE', size: 0.04, type: 'city' }, // LFAC
    { lat: 49.869, lng: 3.028, city: 'PERONNE ST QUENTIN', size: 0.04, type: 'city' }, // LFAG
    { lat: 48.594, lng: 3.005, city: 'LES LOGES', size: 0.04, type: 'city' }, // LFAI
    { lat: 48.546, lng: -0.387, city: 'COUTERNE', size: 0.04, type: 'city' }, // LFAO
    { lat: 49.971, lng: 2.7, city: 'BRAY', size: 0.04, type: 'city' }, // LFAQ
    { lat: 50.515, lng: 1.627, city: 'LE TOUQUET PARIS PLAGE', size: 0.04, type: 'city' }, // LFAT
    { lat: 50.326, lng: 3.461, city: 'DENAIN', size: 0.04, type: 'city' }, // LFAV
    { lat: 49.871, lng: 2.386, city: 'GLISY', size: 0.04, type: 'city' }, // LFAY
    { lat: 44.175, lng: 0.591, city: 'LA GARENNE', size: 0.04, type: 'city' }, // LFBA
    { lat: 44.533, lng: -1.125, city: 'CAZAUX', size: 0.04, type: 'city' }, // LFBC
    { lat: 44.828, lng: -0.716, city: 'MERIGNAC', size: 0.04, type: 'city' }, // LFBD
    { lat: 44.825, lng: 0.519, city: 'ROUMANIERE', size: 0.04, type: 'city' }, // LFBE
    { lat: 43.546, lng: 1.367, city: 'FRANCAZAL', size: 0.04, type: 'city' }, // LFBF
    { lat: 45.658, lng: -0.318, city: 'CHATEAUBERNARD', size: 0.04, type: 'city' }, // LFBG
    { lat: 46.588, lng: 0.307, city: 'BIARD', size: 0.04, type: 'city' }, // LFBI
    { lat: 46.224, lng: 2.363, city: 'MONTLUCON GUERET', size: 0.04, type: 'city' }, // LFBK
    { lat: 45.863, lng: 1.179, city: 'BELLEGARDE', size: 0.04, type: 'city' }, // LFBL
    { lat: 43.912, lng: -0.507, city: 'MONT DE MARSAN', size: 0.04, type: 'city' }, // LFBM
    { lat: 46.311, lng: -0.401, city: 'SOUCHE', size: 0.04, type: 'city' }, // LFBN
    { lat: 43.629, lng: 1.364, city: 'BLAGNAC', size: 0.04, type: 'city' }, // LFBO
    { lat: 43.38, lng: -0.419, city: 'PAU PYRENEES', size: 0.04, type: 'city' }, // LFBP
    { lat: 43.449, lng: 1.263, city: 'LHERM', size: 0.04, type: 'city' }, // LFBR
    { lat: 43.179, lng: -0.006, city: 'LOURDES', size: 0.04, type: 'city' }, // LFBT
    { lat: 45.729, lng: 0.221, city: 'BRIE CHAMPNIERS', size: 0.04, type: 'city' }, // LFBU
    { lat: 45.151, lng: 1.469, city: 'LA ROCHE', size: 0.04, type: 'city' }, // LFBV
    { lat: 45.198, lng: 0.816, city: 'BASSILLAC', size: 0.04, type: 'city' }, // LFBX
    { lat: 43.468, lng: -1.523, city: 'ANGLET', size: 0.04, type: 'city' }, // LFBZ
    { lat: 44.351, lng: 1.475, city: 'LALBENQUE', size: 0.04, type: 'city' }, // LFCC
    { lat: 43.008, lng: 1.103, city: 'ANTICHAN', size: 0.04, type: 'city' }, // LFCG
    { lat: 44.596, lng: -1.111, city: 'LA TESTE DE BUCH', size: 0.04, type: 'city' }, // LFCH
    { lat: 43.914, lng: 2.113, city: 'LE SEQUESTRE', size: 0.04, type: 'city' }, // LFCI
    { lat: 43.556, lng: 2.289, city: 'MAZAMET', size: 0.04, type: 'city' }, // LFCK
    { lat: 43.586, lng: 1.499, city: 'LASBORDES', size: 0.04, type: 'city' }, // LFCL
    { lat: 43.99, lng: 3.183, city: 'LARZAC', size: 0.04, type: 'city' }, // LFCM
    { lat: 44.408, lng: 2.482, city: 'MARCILLAC', size: 0.04, type: 'city' }, // LFCR
    { lat: 45.535, lng: 2.424, city: 'THALAMY', size: 0.04, type: 'city' }, // LFCU
    { lat: 44.397, lng: 0.759, city: 'VILLENEUVE SUR LOT', size: 0.04, type: 'city' }, // LFCW
    { lat: 45.628, lng: -0.973, city: 'MEDIS', size: 0.04, type: 'city' }, // LFCY
    { lat: 44.146, lng: -1.174, city: 'MIMIZAN', size: 0.04, type: 'city' }, // LFCZ
    { lat: 43.709, lng: -0.245, city: 'AIRE SUR L ADOUR', size: 0.04, type: 'city' }, // LFDA
    { lat: 44.026, lng: 1.378, city: 'MONTAUBAN', size: 0.04, type: 'city' }, // LFDB
    { lat: 43.688, lng: 0.602, city: 'LAMOTHE', size: 0.04, type: 'city' }, // LFDH
    { lat: 44.982, lng: -0.135, city: 'ARTIGUES DE LUSSAC', size: 0.04, type: 'city' }, // LFDI
    { lat: 43.091, lng: 1.696, city: 'LES PUJOLS', size: 0.04, type: 'city' }, // LFDJ
    { lat: 44.499, lng: 0.2, city: 'VIRAZEIL', size: 0.04, type: 'city' }, // LFDM
    { lat: 45.888, lng: -0.983, city: 'ST AGNANT', size: 0.04, type: 'city' }, // LFDN
    { lat: 48.463, lng: -5.064, city: 'OUESSANT', size: 0.04, type: 'city' }, // LFEC
    { lat: 48.058, lng: -2.922, city: 'PONTIVY', size: 0.04, type: 'city' }, // LFED
    { lat: 48.052, lng: -3.664, city: 'SCAER', size: 0.04, type: 'city' }, // LFES
    { lat: 46.719, lng: -2.391, city: 'ILE D YEU', size: 0.04, type: 'city' }, // LFEY
    { lat: 47.408, lng: -1.177, city: 'ANCENIS', size: 0.04, type: 'city' }, // LFFI
    { lat: 48.43, lng: 4.481, city: 'BRIENNE LE CHATEAU', size: 0.04, type: 'city' }, // LFFN
    { lat: 48.11, lng: 7.359, city: 'HOUSSEN', size: 0.04, type: 'city' }, // LFGA
    { lat: 47.006, lng: 4.893, city: 'CHALLANGES', size: 0.04, type: 'city' }, // LFGF
    { lat: 47.039, lng: 5.427, city: 'TAVAUX', size: 0.04, type: 'city' }, // LFGJ
    { lat: 47.992, lng: 3.392, city: 'JOIGNY', size: 0.04, type: 'city' }, // LFGK
    { lat: 49.122, lng: 5.469, city: 'LE ROZELIER', size: 0.04, type: 'city' }, // LFGW
    { lat: 44.544, lng: 4.372, city: 'VALS LANAS', size: 0.04, type: 'city' }, // LFHO
    { lat: 45.079, lng: 3.765, city: 'LOUDES', size: 0.04, type: 'city' }, // LFHP
    { lat: 45.076, lng: 2.994, city: 'COLTINES', size: 0.04, type: 'city' }, // LFHQ
    { lat: 46.201, lng: 5.292, city: 'CEYZERIAT', size: 0.04, type: 'city' }, // LFHS
    { lat: 45.916, lng: 4.641, city: 'TARARE', size: 0.04, type: 'city' }, // LFHV
    { lat: 46.534, lng: 3.424, city: 'MONTBEUGNY', size: 0.04, type: 'city' }, // LFHY
    { lat: 44.177, lng: 2.515, city: 'CASSAGNES BEGONHES', size: 0.04, type: 'city' }, // LFIG
    { lat: 43.569, lng: 1.481, city: 'MONTAUDRAN', size: 0.04, type: 'city' }, // LFIO
    { lat: 48.982, lng: 6.254, city: 'METZ NANCY LORRAINE', size: 0.04, type: 'city' }, // LFJL
    { lat: 42.554, lng: 9.483, city: 'PORETTA', size: 0.04, type: 'city' }, // LFKB
    { lat: 42.531, lng: 8.793, city: 'SAINT CATHERINE', size: 0.04, type: 'city' }, // LFKC
    { lat: 41.501, lng: 9.098, city: 'SUD CORSE', size: 0.04, type: 'city' }, // LFKF
    { lat: 41.924, lng: 8.803, city: 'CAMPO DELL ORO', size: 0.04, type: 'city' }, // LFKJ
    { lat: 41.663, lng: 8.89, city: 'PROPRIANO', size: 0.04, type: 'city' }, // LFKO
    { lat: 41.924, lng: 9.406, city: 'SOLENZARA', size: 0.04, type: 'city' }, // LFKS
    { lat: 42.294, lng: 9.193, city: 'CORTE', size: 0.04, type: 'city' }, // LFKT
    { lat: 47.85, lng: 3.497, city: 'BRANCHES', size: 0.04, type: 'city' }, // LFLA
    { lat: 45.638, lng: 5.88, city: 'AIX LES BAINS', size: 0.04, type: 'city' }, // LFLB
    { lat: 45.786, lng: 3.169, city: 'AUVERGNE', size: 0.04, type: 'city' }, // LFLC
    { lat: 47.058, lng: 2.37, city: 'BOURGES', size: 0.04, type: 'city' }, // LFLD
    { lat: 45.561, lng: 5.976, city: 'CHALLES LES EAUX', size: 0.04, type: 'city' }, // LFLE
    { lat: 46.826, lng: 4.817, city: 'CHAMPFORGEUIL', size: 0.04, type: 'city' }, // LFLH
    { lat: 46.192, lng: 6.268, city: 'ANNEMASSE', size: 0.04, type: 'city' }, // LFLI
    { lat: 45.726, lng: 5.091, city: 'SAINT EXUPERY', size: 0.04, type: 'city' }, // LFLL
    { lat: 46.295, lng: 4.796, city: 'CHARNAY', size: 0.04, type: 'city' }, // LFLM
    { lat: 46.413, lng: 4.013, city: 'SAINT YAN', size: 0.04, type: 'city' }, // LFLN
    { lat: 46.058, lng: 4.001, city: 'RENAISON', size: 0.04, type: 'city' }, // LFLO
    { lat: 45.929, lng: 6.099, city: 'MEYTHET', size: 0.04, type: 'city' }, // LFLP
    { lat: 45.363, lng: 5.329, city: 'SAINT GEOIRS', size: 0.04, type: 'city' }, // LFLS
    { lat: 46.352, lng: 2.57, city: 'DOMERAT', size: 0.04, type: 'city' }, // LFLT
    { lat: 44.921, lng: 4.97, city: 'CHABEUIL', size: 0.04, type: 'city' }, // LFLU
    { lat: 46.169, lng: 3.404, city: 'CHARMEIL', size: 0.04, type: 'city' }, // LFLV
    { lat: 44.891, lng: 2.422, city: 'AURILLAC', size: 0.04, type: 'city' }, // LFLW
    { lat: 46.862, lng: 1.731, city: 'DEOLS', size: 0.04, type: 'city' }, // LFLX
    { lat: 45.728, lng: 4.945, city: 'BRON', size: 0.04, type: 'city' }, // LFLY
    { lat: 43.505, lng: 5.368, city: 'AIX LES MILLES', size: 0.04, type: 'city' }, // LFMA
    { lat: 43.384, lng: 6.387, city: 'LE CANNET', size: 0.04, type: 'city' }, // LFMC
    { lat: 43.542, lng: 6.953, city: 'MANDELIEU', size: 0.04, type: 'city' }, // LFMD
    { lat: 45.54, lng: 4.296, city: 'BOUTHEON', size: 0.04, type: 'city' }, // LFMH
    { lat: 43.523, lng: 4.924, city: 'LE TUBE', size: 0.04, type: 'city' }, // LFMI
    { lat: 43.216, lng: 2.306, city: 'SALVAZA', size: 0.04, type: 'city' }, // LFMK
    { lat: 43.436, lng: 5.214, city: 'PROVENCE', size: 0.04, type: 'city' }, // LFML
    { lat: 43.661, lng: 7.218, city: 'COTE D AZUR', size: 0.04, type: 'city' }, // LFMN
    { lat: 44.14, lng: 4.867, city: 'CARITAT', size: 0.04, type: 'city' }, // LFMO
    { lat: 42.74, lng: 2.871, city: 'RIVESALTES', size: 0.04, type: 'city' }, // LFMP
    { lat: 43.252, lng: 5.785, city: 'LE CASTELLET', size: 0.04, type: 'city' }, // LFMQ
    { lat: 44.069, lng: 4.142, city: 'DEAUX', size: 0.04, type: 'city' }, // LFMS
    { lat: 43.576, lng: 3.963, city: 'MEDITERRANEE', size: 0.04, type: 'city' }, // LFMT
    { lat: 43.324, lng: 3.356, city: 'VIAS', size: 0.04, type: 'city' }, // LFMU
    { lat: 43.907, lng: 4.902, city: 'CAUMONT', size: 0.04, type: 'city' }, // LFMV
    { lat: 43.606, lng: 5.109, city: 'SALON', size: 0.04, type: 'city' }, // LFMY
    { lat: 43.176, lng: 2.734, city: 'LEZIGNAN CORBIERES', size: 0.04, type: 'city' }, // LFMZ
    { lat: 44.502, lng: 3.533, city: 'BRENOUX', size: 0.04, type: 'city' }, // LFNB
    { lat: 44.03, lng: 5.078, city: 'CARPENTRAS', size: 0.04, type: 'city' }, // LFNH
    { lat: 47.053, lng: 2.632, city: 'AVORD', size: 0.04, type: 'city' }, // LFOA
    { lat: 49.454, lng: 2.113, city: 'TILLE', size: 0.04, type: 'city' }, // LFOB
    { lat: 48.058, lng: 1.376, city: 'CHATEAUDUN', size: 0.04, type: 'city' }, // LFOC
    { lat: 47.257, lng: -0.115, city: 'ST FLORENT', size: 0.04, type: 'city' }, // LFOD
    { lat: 49.029, lng: 1.22, city: 'FAUVILLE', size: 0.04, type: 'city' }, // LFOE
    { lat: 49.534, lng: 0.088, city: 'OCTEVILLE', size: 0.04, type: 'city' }, // LFOH
    { lat: 50.143, lng: 1.832, city: 'ABBEVILLE', size: 0.04, type: 'city' }, // LFOI
    { lat: 47.988, lng: 1.761, city: 'BRICY', size: 0.04, type: 'city' }, // LFOJ
    { lat: 48.776, lng: 4.184, city: 'VATRY', size: 0.04, type: 'city' }, // LFOK
    { lat: 49.384, lng: 1.175, city: 'VALLEE DE SEINE', size: 0.04, type: 'city' }, // LFOP
    { lat: 47.432, lng: 0.728, city: 'VAL DE LOIRE', size: 0.04, type: 'city' }, // LFOT
    { lat: 47.082, lng: -0.877, city: 'LE PONTREAU', size: 0.04, type: 'city' }, // LFOU
    { lat: 48.031, lng: -0.743, city: 'ENTRAMMES', size: 0.04, type: 'city' }, // LFOV
    { lat: 47.897, lng: 2.163, city: 'ST DENIS DE L HOTEL', size: 0.04, type: 'city' }, // LFOZ
    { lat: 48.969, lng: 2.441, city: 'LE BOURGET', size: 0.04, type: 'city' }, // LFPB
    { lat: 49.253, lng: 2.519, city: 'CREIL', size: 0.04, type: 'city' }, // LFPC
    { lat: 49.013, lng: 2.55, city: 'CHARLES DE GAULLE', size: 0.04, type: 'city' }, // LFPG
    { lat: 48.838, lng: 3.016, city: 'VOISINS', size: 0.04, type: 'city' }, // LFPK
    { lat: 48.605, lng: 2.671, city: 'VILLAROCHE', size: 0.04, type: 'city' }, // LFPM
    { lat: 48.752, lng: 2.106, city: 'TOUSSUS LE NOBLE', size: 0.04, type: 'city' }, // LFPN
    { lat: 48.725, lng: 2.359, city: 'ORLY', size: 0.04, type: 'city' }, // LFPO
    { lat: 49.096, lng: 2.041, city: 'CORMEILLES EN VEXIN', size: 0.04, type: 'city' }, // LFPT
    { lat: 48.774, lng: 2.201, city: 'VELIZY', size: 0.04, type: 'city' }, // LFPV
    { lat: 48.597, lng: 2.331, city: 'BRETIGNY SUR ORGE', size: 0.04, type: 'city' }, // LFPY
    { lat: 49.208, lng: 4.157, city: 'PRUNAY', size: 0.04, type: 'city' }, // LFQA
    { lat: 48.323, lng: 4.018, city: 'BARBEREY', size: 0.04, type: 'city' }, // LFQB
    { lat: 48.597, lng: 6.545, city: 'CROISMARE', size: 0.04, type: 'city' }, // LFQC
    { lat: 49.227, lng: 5.672, city: 'ROUVRES', size: 0.04, type: 'city' }, // LFQE
    { lat: 46.966, lng: 4.26, city: 'BELLEVUE', size: 0.04, type: 'city' }, // LFQF
    { lat: 47.001, lng: 3.114, city: 'FOURCHAMBAULT', size: 0.04, type: 'city' }, // LFQG
    { lat: 50.222, lng: 3.154, city: 'EPINOY', size: 0.04, type: 'city' }, // LFQI
    { lat: 50.31, lng: 4.033, city: 'ELESMES', size: 0.04, type: 'city' }, // LFQJ
    { lat: 47.208, lng: 6.083, city: 'LA VEZE', size: 0.04, type: 'city' }, // LFQM
    { lat: 48.766, lng: 7.2, city: 'BOURSCHEID', size: 0.04, type: 'city' }, // LFQP
    { lat: 50.562, lng: 3.089, city: 'LESQUIN', size: 0.04, type: 'city' }, // LFQQ
    { lat: 50.618, lng: 2.642, city: 'CALONNE', size: 0.04, type: 'city' }, // LFQT
    { lat: 49.784, lng: 4.647, city: 'CHARLEVILLE MEZIERES', size: 0.04, type: 'city' }, // LFQV
    { lat: 47.638, lng: 6.204, city: 'FROTEY', size: 0.04, type: 'city' }, // LFQW
    { lat: 47.497, lng: -0.573, city: 'AVRILLE', size: 0.04, type: 'city' }, // LFRA
    { lat: 48.448, lng: -4.418, city: 'GUIPAVAS', size: 0.04, type: 'city' }, // LFRB
    { lat: 49.65, lng: -1.47, city: 'MAUPERTUS', size: 0.04, type: 'city' }, // LFRC
    { lat: 48.588, lng: -2.08, city: 'PLEURTUIT', size: 0.04, type: 'city' }, // LFRD
    { lat: 47.289, lng: -2.346, city: 'ESCOUBLAC', size: 0.04, type: 'city' }, // LFRE
    { lat: 48.883, lng: -1.564, city: 'GRANVILLE', size: 0.04, type: 'city' }, // LFRF
    { lat: 49.365, lng: 0.154, city: 'ST GATIEN', size: 0.04, type: 'city' }, // LFRG
    { lat: 47.761, lng: -3.44, city: 'LANN BIHOUE', size: 0.04, type: 'city' }, // LFRH
    { lat: 46.702, lng: -1.379, city: 'LES AJONCS', size: 0.04, type: 'city' }, // LFRI
    { lat: 48.53, lng: -4.151, city: 'LANDIVISIAU', size: 0.04, type: 'city' }, // LFRJ
    { lat: 49.173, lng: -0.45, city: 'CARPIQUET', size: 0.04, type: 'city' }, // LFRK
    { lat: 48.282, lng: -4.445, city: 'POULMIC', size: 0.04, type: 'city' }, // LFRL
    { lat: 47.949, lng: 0.202, city: 'ARNAGE', size: 0.04, type: 'city' }, // LFRM
    { lat: 48.069, lng: -1.735, city: 'ST JACQUES', size: 0.04, type: 'city' }, // LFRN
    { lat: 48.754, lng: -3.471, city: 'LANNION', size: 0.04, type: 'city' }, // LFRO
    { lat: 47.975, lng: -4.168, city: 'PLUGUFFAN', size: 0.04, type: 'city' }, // LFRQ
    { lat: 47.153, lng: -1.611, city: 'NANTES ATLANTIQUE', size: 0.04, type: 'city' }, // LFRS
    { lat: 48.538, lng: -2.854, city: 'ARMOR', size: 0.04, type: 'city' }, // LFRT
    { lat: 48.603, lng: -3.816, city: 'PLOUJEAN', size: 0.04, type: 'city' }, // LFRU
    { lat: 47.723, lng: -2.718, city: 'MEUCON', size: 0.04, type: 'city' }, // LFRV
    { lat: 47.312, lng: -2.149, city: 'MONTOIR', size: 0.04, type: 'city' }, // LFRZ
    { lat: 47.589, lng: 7.53, city: 'BALE MULHOUSE', size: 0.04, type: 'city' }, // LFSB
    { lat: 47.922, lng: 7.399, city: 'MEYENHEIM', size: 0.04, type: 'city' }, // LFSC
    { lat: 47.269, lng: 5.09, city: 'LONGVIC', size: 0.04, type: 'city' }, // LFSD
    { lat: 49.072, lng: 6.132, city: 'FRESCATY', size: 0.04, type: 'city' }, // LFSF
    { lat: 48.325, lng: 6.07, city: 'MIRECOURT', size: 0.04, type: 'city' }, // LFSG
    { lat: 48.793, lng: 7.816, city: 'HAGUENAU', size: 0.04, type: 'city' }, // LFSH
    { lat: 48.636, lng: 4.899, city: 'ROBINSON', size: 0.04, type: 'city' }, // LFSI
    { lat: 48.78, lng: 5.98, city: 'ROSIERES', size: 0.04, type: 'city' }, // LFSL
    { lat: 47.487, lng: 6.792, city: 'COURCELLES', size: 0.04, type: 'city' }, // LFSM
    { lat: 48.692, lng: 6.23, city: 'ESSEY', size: 0.04, type: 'city' }, // LFSN
    { lat: 48.583, lng: 5.955, city: 'OCHEY', size: 0.04, type: 'city' }, // LFSO
    { lat: 46.904, lng: 6.327, city: 'PONTARLIER', size: 0.04, type: 'city' }, // LFSP
    { lat: 49.31, lng: 4.05, city: 'CHAMPAGNE', size: 0.04, type: 'city' }, // LFSR
    { lat: 48.538, lng: 7.628, city: 'ENTZHEIM', size: 0.04, type: 'city' }, // LFST
    { lat: 47.783, lng: 6.364, city: 'SAINT SAUVEUR', size: 0.04, type: 'city' }, // LFSX
    { lat: 43.248, lng: 6.127, city: 'PIERREFEU', size: 0.04, type: 'city' }, // LFTF
    { lat: 43.097, lng: 6.146, city: 'HYERES', size: 0.04, type: 'city' }, // LFTH
    { lat: 43.757, lng: 4.416, city: 'GARONS', size: 0.04, type: 'city' }, // LFTW
    { lat: 47.095, lng: -56.38, city: 'MIQUELON', size: 0.04, type: 'city' }, // LFVM
    { lat: 46.763, lng: -56.175, city: 'ST PIERRE', size: 0.04, type: 'city' }, // LFVP
    { lat: 45.987, lng: 5.328, city: 'AMBERIEU', size: 0.04, type: 'city' }, // LFXA
    { lat: 44.057, lng: 5.495, city: 'SAINT CHRISTOL', size: 0.04, type: 'city' }, // LFXI
    { lat: 48.085, lng: 5.665, city: 'DAMBLAIN', size: 0.04, type: 'city' }, // LFYD
    { lat: 50.141, lng: 3.263, city: 'NIERGNIES', size: 0.04, type: 'city' }, // LFYG
    { lat: 47.335, lng: 5.514, city: 'BROYE LES PESMES', size: 0.04, type: 'city' }, // LFYH
    { lat: 47.704, lng: 6.546, city: 'MALBOUHANS', size: 0.04, type: 'city' }, // LFYL
    { lat: 49.758, lng: 3.212, city: 'CLASTRES', size: 0.04, type: 'city' }, // LFYT
    { lat: 37.921, lng: 21.293, city: 'ANDRAVIDA', size: 0.04, type: 'city' }, // LGAD
    { lat: 38.602, lng: 21.351, city: 'AGRINION', size: 0.04, type: 'city' }, // LGAG
    { lat: 40.856, lng: 25.956, city: 'DIMOKRITOS', size: 0.04, type: 'city' }, // LGAL
    { lat: 37.888, lng: 23.732, city: 'ATHINAI', size: 0.04, type: 'city' }, // LGAT
    { lat: 40.651, lng: 22.489, city: 'ALEXANDRIA', size: 0.04, type: 'city' }, // LGAX
    { lat: 39.219, lng: 22.794, city: 'NEA ANCHIALOS', size: 0.04, type: 'city' }, // LGBL
    { lat: 38.064, lng: 23.556, city: 'ELEFSIS', size: 0.04, type: 'city' }, // LGEL
    { lat: 38.343, lng: 26.141, city: 'CHIOS', size: 0.04, type: 'city' }, // LGHI
    { lat: 39.696, lng: 20.822, city: 'IOANNINA', size: 0.04, type: 'city' }, // LGIO
    { lat: 35.339, lng: 25.18, city: 'NIKOS KAZANTZAKIS', size: 0.04, type: 'city' }, // LGIR
    { lat: 40.449, lng: 21.276, city: 'ARISTOTELIS', size: 0.04, type: 'city' }, // LGKA
    { lat: 36.274, lng: 23.017, city: 'KITHIRA', size: 0.04, type: 'city' }, // LGKC
    { lat: 38.12, lng: 20.501, city: 'KEFALLINIA', size: 0.04, type: 'city' }, // LGKF
    { lat: 37.068, lng: 22.026, city: 'KALAMATA', size: 0.04, type: 'city' }, // LGKL
    { lat: 40.972, lng: 24.342, city: 'AMIGDHALEON', size: 0.04, type: 'city' }, // LGKM
    { lat: 36.793, lng: 27.092, city: 'KOS', size: 0.04, type: 'city' }, // LGKO
    { lat: 35.421, lng: 27.146, city: 'KARPATHOS', size: 0.04, type: 'city' }, // LGKP
    { lat: 39.602, lng: 19.912, city: 'IOANNIS KAPODISTRIAS INTERNATIONAL', size: 0.04, type: 'city' }, // LGKR
    { lat: 35.421, lng: 26.91, city: 'KASOS', size: 0.04, type: 'city' }, // LGKS
    { lat: 40.913, lng: 24.619, city: 'MEGAS ALEXANDROS INTERNATIONAL', size: 0.04, type: 'city' }, // LGKV
    { lat: 40.286, lng: 21.841, city: 'FILIPPOS', size: 0.04, type: 'city' }, // LGKZ
    { lat: 37.185, lng: 26.8, city: 'LEROS', size: 0.04, type: 'city' }, // LGLE
    { lat: 39.917, lng: 25.236, city: 'LIMNOS', size: 0.04, type: 'city' }, // LGLM
    { lat: 39.65, lng: 22.465, city: 'LARISA', size: 0.04, type: 'city' }, // LGLR
    { lat: 37.981, lng: 23.365, city: 'MEGARA', size: 0.04, type: 'city' }, // LGMG
    { lat: 37.435, lng: 25.348, city: 'MIKONOS', size: 0.04, type: 'city' }, // LGMK
    { lat: 38.145, lng: 24.014, city: 'MARATHON', size: 0.04, type: 'city' }, // LGMR
    { lat: 39.057, lng: 26.598, city: 'MITILINI', size: 0.04, type: 'city' }, // LGMT
    { lat: 38.925, lng: 20.765, city: 'AKTIO', size: 0.04, type: 'city' }, // LGPZ
    { lat: 36.383, lng: 28.109, city: 'MARITSA', size: 0.04, type: 'city' }, // LGRD
    { lat: 36.405, lng: 28.086, city: 'DIAGORAS', size: 0.04, type: 'city' }, // LGRP
    { lat: 38.151, lng: 21.426, city: 'ARAXOS', size: 0.04, type: 'city' }, // LGRX
    { lat: 35.532, lng: 24.149, city: 'SOUDA', size: 0.04, type: 'city' }, // LGSA
    { lat: 39.177, lng: 23.504, city: 'SKIATHOS', size: 0.04, type: 'city' }, // LGSK
    { lat: 37.69, lng: 26.912, city: 'SAMOS', size: 0.04, type: 'city' }, // LGSM
    { lat: 37.423, lng: 24.951, city: 'SYROS', size: 0.04, type: 'city' }, // LGSO
    { lat: 36.973, lng: 22.526, city: 'SPARTI', size: 0.04, type: 'city' }, // LGSP
    { lat: 36.4, lng: 25.479, city: 'SANTORINI', size: 0.04, type: 'city' }, // LGSR
    { lat: 35.214, lng: 26.098, city: 'SITIA', size: 0.04, type: 'city' }, // LGST
    { lat: 39.48, lng: 22.767, city: 'STEFANOVIKION', size: 0.04, type: 'city' }, // LGSV
    { lat: 38.968, lng: 24.487, city: 'SKYROS', size: 0.04, type: 'city' }, // LGSY
    { lat: 38.34, lng: 23.565, city: 'TANAGRA', size: 0.04, type: 'city' }, // LGTG
    { lat: 35.187, lng: 25.327, city: 'KASTELI', size: 0.04, type: 'city' }, // LGTL
    { lat: 37.531, lng: 22.405, city: 'TRIPOLIS', size: 0.04, type: 'city' }, // LGTP
    { lat: 40.52, lng: 22.971, city: 'MAKEDONIA', size: 0.04, type: 'city' }, // LGTS
    { lat: 38.109, lng: 23.784, city: 'TATOI', size: 0.04, type: 'city' }, // LGTT
    { lat: 37.75, lng: 20.882, city: 'ZAKINTHOS DIONYSIOS SOLOMOS', size: 0.04, type: 'city' }, // LGZA
    { lat: 47.437, lng: 19.256, city: 'FERIHEGY', size: 0.04, type: 'city' }, // LHBP
    { lat: 47.489, lng: 21.615, city: 'DEBRECEN', size: 0.04, type: 'city' }, // LHDC
    { lat: 47.571, lng: 19.339, city: 'GODOLLO', size: 0.04, type: 'city' }, // LHGD
    { lat: 46.917, lng: 19.749, city: 'KECSKEMET', size: 0.04, type: 'city' }, // LHKE
    { lat: 46.389, lng: 17.731, city: 'KAPOSVAR', size: 0.04, type: 'city' }, // LHKV
    { lat: 47.984, lng: 21.692, city: 'NYIREGYHAZA', size: 0.04, type: 'city' }, // LHNY
    { lat: 46.304, lng: 18.769, city: 'OCSENY', size: 0.04, type: 'city' }, // LHOY
    { lat: 47.364, lng: 17.501, city: 'PAPA', size: 0.04, type: 'city' }, // LHPA
    { lat: 47.078, lng: 17.968, city: 'SZENTKIRALYSZABADJA', size: 0.04, type: 'city' }, // LHSA
    { lat: 46.858, lng: 18.096, city: 'KILITI', size: 0.04, type: 'city' }, // LHSK
    { lat: 46.686, lng: 17.159, city: 'BALATON', size: 0.04, type: 'city' }, // LHSM
    { lat: 47.123, lng: 20.235, city: 'SZOLNOK', size: 0.04, type: 'city' }, // LHSN
    { lat: 46.393, lng: 17.917, city: 'TASZAR', size: 0.04, type: 'city' }, // LHTA
    { lat: 47.345, lng: 18.981, city: 'TOKOL', size: 0.04, type: 'city' }, // LHTL
    { lat: 41.539, lng: 15.713, city: 'AMENDOLA', size: 0.04, type: 'city' }, // LIBA
    { lat: 38.997, lng: 17.08, city: 'CROTONE', size: 0.04, type: 'city' }, // LIBC
    { lat: 41.138, lng: 16.761, city: 'PALESE MACCHIE', size: 0.04, type: 'city' }, // LIBD
    { lat: 41.433, lng: 15.535, city: 'GINO LISA', size: 0.04, type: 'city' }, // LIBF
    { lat: 40.516, lng: 17.402, city: 'GROTTAGLIE', size: 0.04, type: 'city' }, // LIBG
    { lat: 40.239, lng: 18.133, city: 'LECCE', size: 0.04, type: 'city' }, // LIBN
    { lat: 42.431, lng: 14.181, city: 'PESCARA', size: 0.04, type: 'city' }, // LIBP
    { lat: 40.657, lng: 17.947, city: 'CASALE', size: 0.04, type: 'city' }, // LIBR
    { lat: 40.768, lng: 16.933, city: 'GIOIA DEL COLLE', size: 0.04, type: 'city' }, // LIBV
    { lat: 38.906, lng: 16.242, city: 'LAMEZIA TERME', size: 0.04, type: 'city' }, // LICA
    { lat: 37.467, lng: 15.066, city: 'CATANIA FONTANAROSSA', size: 0.04, type: 'city' }, // LICC
    { lat: 35.498, lng: 12.618, city: 'LAMPEDUSA', size: 0.04, type: 'city' }, // LICD
    { lat: 36.816, lng: 11.969, city: 'PANTELLERIA', size: 0.04, type: 'city' }, // LICG
    { lat: 38.176, lng: 13.091, city: 'PALERMO', size: 0.04, type: 'city' }, // LICJ
    { lat: 38.111, lng: 13.313, city: 'BOCCADIFALCO', size: 0.04, type: 'city' }, // LICP
    { lat: 38.071, lng: 15.651, city: 'REGGIO CALABRIA', size: 0.04, type: 'city' }, // LICR
    { lat: 37.913, lng: 12.488, city: 'TRAPANI BIRGI', size: 0.04, type: 'city' }, // LICT
    { lat: 37.401, lng: 14.922, city: 'SIGONELLA', size: 0.04, type: 'city' }, // LICZ
    { lat: 40.632, lng: 8.291, city: 'ALGHERO', size: 0.04, type: 'city' }, // LIEA
    { lat: 39.354, lng: 8.972, city: 'DECIMOMANNU', size: 0.04, type: 'city' }, // LIED
    { lat: 39.251, lng: 9.054, city: 'ELMAS', size: 0.04, type: 'city' }, // LIEE
    { lat: 40.899, lng: 9.518, city: 'OLBIA COSTA SMERALDA', size: 0.04, type: 'city' }, // LIEO
    { lat: 39.919, lng: 9.683, city: 'TORTOLI', size: 0.04, type: 'city' }, // LIET
    { lat: 40.417, lng: 12.333, city: 'ITALIAN MET OFFICE', size: 0.04, type: 'city' }, // LIIB
    { lat: 45.086, lng: 7.603, city: 'AERITALIA', size: 0.04, type: 'city' }, // LIMA
    { lat: 45.54, lng: 9.202, city: 'BRESSO', size: 0.04, type: 'city' }, // LIMB
    { lat: 45.631, lng: 8.728, city: 'MALPENSA', size: 0.04, type: 'city' }, // LIMC
    { lat: 45.674, lng: 9.704, city: 'BERGAMO ORIO AL SERIO', size: 0.04, type: 'city' }, // LIME
    { lat: 45.201, lng: 7.649, city: 'TORINO', size: 0.04, type: 'city' }, // LIMF
    { lat: 44.051, lng: 8.127, city: 'ALBENGA', size: 0.04, type: 'city' }, // LIMG
    { lat: 44.412, lng: 8.842, city: 'GENOVA SESTRI', size: 0.04, type: 'city' }, // LIMJ
    { lat: 45.445, lng: 9.277, city: 'LINATE', size: 0.04, type: 'city' }, // LIML
    { lat: 45.529, lng: 8.669, city: 'CAMERI', size: 0.04, type: 'city' }, // LIMN
    { lat: 44.824, lng: 10.296, city: 'PARMA', size: 0.04, type: 'city' }, // LIMP
    { lat: 44.913, lng: 9.723, city: 'PIACENZA', size: 0.04, type: 'city' }, // LIMS
    { lat: 45.738, lng: 7.368, city: 'AOSTA', size: 0.04, type: 'city' }, // LIMW
    { lat: 44.546, lng: 7.622, city: 'LEVALDIGI', size: 0.04, type: 'city' }, // LIMZ
    { lat: 46.032, lng: 12.596, city: 'AVIANO AB', size: 0.04, type: 'city' }, // LIPA
    { lat: 46.461, lng: 11.326, city: 'BOLZANO', size: 0.04, type: 'city' }, // LIPB
    { lat: 44.224, lng: 12.306, city: 'CERVIA', size: 0.04, type: 'city' }, // LIPC
    { lat: 44.534, lng: 11.29, city: 'BOLOGNA', size: 0.04, type: 'city' }, // LIPE
    { lat: 45.649, lng: 12.195, city: 'TREVISO', size: 0.04, type: 'city' }, // LIPH
    { lat: 45.981, lng: 13.054, city: 'RIVOLTO', size: 0.04, type: 'city' }, // LIPI
    { lat: 44.195, lng: 12.07, city: 'FORLI', size: 0.04, type: 'city' }, // LIPK
    { lat: 45.432, lng: 10.268, city: 'GHEDI', size: 0.04, type: 'city' }, // LIPL
    { lat: 45.472, lng: 10.928, city: 'VERONA BOSCOMANTICO', size: 0.04, type: 'city' }, // LIPN
    { lat: 45.429, lng: 10.331, city: 'MONTICHIARI', size: 0.04, type: 'city' }, // LIPO
    { lat: 45.828, lng: 13.466, city: 'RONCHI DEI LEGIONARI', size: 0.04, type: 'city' }, // LIPQ
    { lat: 44.02, lng: 12.612, city: 'RIMINI', size: 0.04, type: 'city' }, // LIPR
    { lat: 45.684, lng: 12.086, city: 'ISTRANA', size: 0.04, type: 'city' }, // LIPS
    { lat: 45.574, lng: 11.531, city: 'VICENZA', size: 0.04, type: 'city' }, // LIPT
    { lat: 45.396, lng: 11.848, city: 'PADOVA', size: 0.04, type: 'city' }, // LIPU
    { lat: 45.396, lng: 10.888, city: 'VILLAFRANCA', size: 0.04, type: 'city' }, // LIPX
    { lat: 45.505, lng: 12.352, city: 'VENEZIA TESSERA', size: 0.04, type: 'city' }, // LIPZ
    { lat: 43.257, lng: 11.254, city: 'AMPUGNANO', size: 0.04, type: 'city' }, // LIQS
    { lat: 41.799, lng: 12.595, city: 'CIAMPINO', size: 0.04, type: 'city' }, // LIRA
    { lat: 41.654, lng: 12.444, city: 'PRATICA DI MARE', size: 0.04, type: 'city' }, // LIRE
    { lat: 41.813, lng: 12.253, city: 'FIUMICINO', size: 0.04, type: 'city' }, // LIRF
    { lat: 41.99, lng: 12.741, city: 'GUIDONIA', size: 0.04, type: 'city' }, // LIRG
    { lat: 40.62, lng: 14.911, city: 'PONTECAGNANO', size: 0.04, type: 'city' }, // LIRI
    { lat: 42.76, lng: 10.239, city: 'MARINA DI CAMPO', size: 0.04, type: 'city' }, // LIRJ
    { lat: 41.542, lng: 12.909, city: 'LATINA', size: 0.04, type: 'city' }, // LIRL
    { lat: 41.061, lng: 14.082, city: 'GRAZZANISE', size: 0.04, type: 'city' }, // LIRM
    { lat: 40.886, lng: 14.291, city: 'CAPODICHINO', size: 0.04, type: 'city' }, // LIRN
    { lat: 43.684, lng: 10.393, city: 'PISA', size: 0.04, type: 'city' }, // LIRP
    { lat: 43.81, lng: 11.205, city: 'PERETOLA', size: 0.04, type: 'city' }, // LIRQ
    { lat: 42.761, lng: 11.072, city: 'GROSSETO', size: 0.04, type: 'city' }, // LIRS
    { lat: 41.952, lng: 12.499, city: 'URBE', size: 0.04, type: 'city' }, // LIRU
    { lat: 42.43, lng: 12.064, city: 'VITERBO', size: 0.04, type: 'city' }, // LIRV
    { lat: 43.096, lng: 12.513, city: 'PERUGIA', size: 0.04, type: 'city' }, // LIRZ
    { lat: 45.9, lng: 15.53, city: 'CERKLJE', size: 0.04, type: 'city' }, // LJCE
    { lat: 46.224, lng: 14.457, city: 'LJUBLJANA', size: 0.04, type: 'city' }, // LJLJ
    { lat: 46.48, lng: 15.686, city: 'MARIBOR', size: 0.04, type: 'city' }, // LJMB
    { lat: 45.473, lng: 13.615, city: 'PORTOROZ', size: 0.04, type: 'city' }, // LJPZ
    { lat: 46.472, lng: 15.117, city: 'SLOVENJ GRADEC', size: 0.04, type: 'city' }, // LJSG
    { lat: 48.946, lng: 14.427, city: 'CESKE BUDEJOVICE', size: 0.04, type: 'city' }, // LKCS
    { lat: 49.684, lng: 15.676, city: 'CHOTEBOR', size: 0.04, type: 'city' }, // LKCT
    { lat: 49.939, lng: 15.382, city: 'CASLAV', size: 0.04, type: 'city' }, // LKCV
    { lat: 50.253, lng: 15.845, city: 'HRADEC KRALOVE', size: 0.04, type: 'city' }, // LKHK
    { lat: 50.121, lng: 14.544, city: 'KBELY', size: 0.04, type: 'city' }, // LKKB
    { lat: 49.029, lng: 17.44, city: 'KUNOVICE', size: 0.04, type: 'city' }, // LKKU
    { lat: 50.203, lng: 12.915, city: 'KARLOVY VARY', size: 0.04, type: 'city' }, // LKKV
    { lat: 49.675, lng: 13.274, city: 'LINE', size: 0.04, type: 'city' }, // LKLN
    { lat: 50.54, lng: 15.006, city: 'MNICHOVO HRADISTE', size: 0.04, type: 'city' }, // LKMH
    { lat: 49.696, lng: 18.111, city: 'MOSNOV', size: 0.04, type: 'city' }, // LKMT
    { lat: 49.166, lng: 16.125, city: 'NAMEST', size: 0.04, type: 'city' }, // LKNA
    { lat: 50.013, lng: 15.739, city: 'PARDUBICE', size: 0.04, type: 'city' }, // LKPD
    { lat: 49.719, lng: 14.097, city: 'PRIBRAM', size: 0.04, type: 'city' }, // LKPM
    { lat: 49.426, lng: 17.405, city: 'PREROV', size: 0.04, type: 'city' }, // LKPO
    { lat: 50.101, lng: 14.26, city: 'RUZYNE', size: 0.04, type: 'city' }, // LKPR
    { lat: 49.245, lng: 14.714, city: 'SOBESLAV', size: 0.04, type: 'city' }, // LKSO
    { lat: 49.151, lng: 16.694, city: 'TURANY', size: 0.04, type: 'city' }, // LKTB
    { lat: 50.216, lng: 14.396, city: 'VODOCHODY', size: 0.04, type: 'city' }, // LKVO
    { lat: 32.009, lng: 34.877, city: 'BEN GURION', size: 0.04, type: 'city' }, // LLBG
    { lat: 31.287, lng: 34.723, city: 'TEYMAN', size: 0.04, type: 'city' }, // LLBS
    { lat: 31.839, lng: 34.822, city: 'TEL NOV', size: 0.04, type: 'city' }, // LLEK
    { lat: 32.441, lng: 35.006, city: 'EYN SHEMER', size: 0.04, type: 'city' }, // LLES
    { lat: 29.561, lng: 34.96, city: 'EILAT', size: 0.04, type: 'city' }, // LLET
    { lat: 30.623, lng: 35.202, city: 'EN YAHAV', size: 0.04, type: 'city' }, // LLEY
    { lat: 32.811, lng: 35.044, city: 'HAIFA', size: 0.04, type: 'city' }, // LLHA
    { lat: 31.762, lng: 34.727, city: 'HATZOR', size: 0.04, type: 'city' }, // LLHS
    { lat: 32.981, lng: 35.572, city: 'MAHANAIM I BEN YAAKOV', size: 0.04, type: 'city' }, // LLIB
    { lat: 31.867, lng: 35.217, city: 'JERUSALEM/ATAROT', size: 0.04, type: 'city' }, // LLJR
    { lat: 31.229, lng: 35.191, city: 'ARAD', size: 0.04, type: 'city' }, // LLLL
    { lat: 32.599, lng: 35.228, city: 'MEGIDDO', size: 0.04, type: 'city' }, // LLMG
    { lat: 31.328, lng: 35.388, city: 'BAR YEHUDA', size: 0.04, type: 'city' }, // LLMZ
    { lat: 31.208, lng: 35.012, city: 'NEVATIM AB', size: 0.04, type: 'city' }, // LLNV
    { lat: 29.94, lng: 34.936, city: 'OVDA', size: 0.04, type: 'city' }, // LLOV
    { lat: 32.66, lng: 35.182, city: 'RAMAT DAVID', size: 0.04, type: 'city' }, // LLRD
    { lat: 30.776, lng: 34.667, city: 'RAMON', size: 0.04, type: 'city' }, // LLRM
    { lat: 32.114, lng: 34.782, city: 'SDE DOV', size: 0.04, type: 'city' }, // LLSD
    { lat: 35.857, lng: 14.478, city: 'LUQA', size: 0.04, type: 'city' }, // LMML
    { lat: 35.917, lng: 14.417, city: 'MALTA ACC', size: 0.04, type: 'city' }, // LMMM
    { lat: 47.843, lng: 16.26, city: 'WIENER NEUSTADT EAST', size: 0.04, type: 'city' }, // LOAN
    { lat: 48.183, lng: 14.041, city: 'WELS', size: 0.04, type: 'city' }, // LOLW
    { lat: 47.0, lng: 15.433, city: 'GRAZ MIL/CIV', size: 0.04, type: 'city' }, // LOWG
    { lat: 47.26, lng: 11.344, city: 'INNSBRUCK', size: 0.04, type: 'city' }, // LOWI
    { lat: 46.65, lng: 14.333, city: 'KLAGENFURT(AUS-AFB)', size: 0.04, type: 'city' }, // LOWK
    { lat: 48.233, lng: 14.183, city: 'HORSCHING INTERNATIONAL AIRPORT (AUS - AFB)', size: 0.04, type: 'city' }, // LOWL
    { lat: 48.0, lng: 16.5, city: 'VIENNA MET CENTER', size: 0.04, type: 'city' }, // LOWM
    { lat: 47.793, lng: 13.004, city: 'SALZBURG', size: 0.04, type: 'city' }, // LOWS
    { lat: 48.11, lng: 16.57, city: 'SCHWECHAT', size: 0.04, type: 'city' }, // LOWW
    { lat: 46.991, lng: 15.439, city: 'GRAZ', size: 0.04, type: 'city' }, // LOXG
    { lat: 46.642, lng: 14.338, city: 'KLAGENFURT', size: 0.04, type: 'city' }, // LOXK
    { lat: 48.233, lng: 14.188, city: 'LINZ', size: 0.04, type: 'city' }, // LOXL
    { lat: 48.321, lng: 16.112, city: 'TULLN', size: 0.04, type: 'city' }, // LOXT
    { lat: 47.203, lng: 14.744, city: 'ZELTWEG', size: 0.04, type: 'city' }, // LOXZ
    { lat: 38.883, lng: -9.03, city: 'ALVERCA', size: 0.04, type: 'city' }, // LPAR
    { lat: 36.971, lng: -25.171, city: 'SANTA MARIA', size: 0.04, type: 'city' }, // LPAZ
    { lat: 41.868, lng: -6.712, city: 'BRAGANCA', size: 0.04, type: 'city' }, // LPBG
    { lat: 38.079, lng: -7.932, city: 'BEJA', size: 0.04, type: 'city' }, // LPBJ
    { lat: 41.587, lng: -8.445, city: 'BRAGA', size: 0.04, type: 'city' }, // LPBR
    { lat: 40.157, lng: -8.47, city: 'COIMBRA', size: 0.04, type: 'city' }, // LPCO
    { lat: 38.725, lng: -9.355, city: 'CASCAIS', size: 0.04, type: 'city' }, // LPCS
    { lat: 40.265, lng: -7.48, city: 'COVILHA', size: 0.04, type: 'city' }, // LPCV
    { lat: 38.533, lng: -7.889, city: 'EVORA', size: 0.04, type: 'city' }, // LPEV
    { lat: 39.455, lng: -31.131, city: 'FLORES', size: 0.04, type: 'city' }, // LPFL
    { lat: 37.014, lng: -7.966, city: 'FARO', size: 0.04, type: 'city' }, // LPFR
    { lat: 39.092, lng: -28.03, city: 'GRACIOSA', size: 0.04, type: 'city' }, // LPGR
    { lat: 38.52, lng: -28.716, city: 'HORTA', size: 0.04, type: 'city' }, // LPHR
    { lat: 40.974, lng: -8.645, city: 'ESPINHO', size: 0.04, type: 'city' }, // LPIN
    { lat: 38.764, lng: -27.093, city: 'LAJES', size: 0.04, type: 'city' }, // LPLA
    { lat: 38.717, lng: -9.156, city: 'LISBON MET OFFICE', size: 0.04, type: 'city' }, // LPMG
    { lat: 39.831, lng: -8.887, city: 'MONTE REAL', size: 0.04, type: 'city' }, // LPMR
    { lat: 38.704, lng: -9.036, city: 'MONTIJO', size: 0.04, type: 'city' }, // LPMT
    { lat: 40.916, lng: -8.646, city: 'OVAR', size: 0.04, type: 'city' }, // LPOV
    { lat: 37.741, lng: -25.698, city: 'PONTA DELGADA', size: 0.04, type: 'city' }, // LPPD
    { lat: 38.554, lng: -28.44, city: 'PICO', size: 0.04, type: 'city' }, // LPPI
    { lat: 37.149, lng: -8.584, city: 'PORTIMAO', size: 0.04, type: 'city' }, // LPPM
    { lat: 41.248, lng: -8.681, city: 'PORTO', size: 0.04, type: 'city' }, // LPPR
    { lat: 33.073, lng: -16.35, city: 'PORTO SANTO', size: 0.04, type: 'city' }, // LPPS
    { lat: 38.781, lng: -9.136, city: 'LISBOA', size: 0.04, type: 'city' }, // LPPT
    { lat: 38.665, lng: -28.176, city: 'SAO JORGE', size: 0.04, type: 'city' }, // LPSJ
    { lat: 38.831, lng: -9.339, city: 'SINTRA', size: 0.04, type: 'city' }, // LPST
    { lat: 39.475, lng: -8.364, city: 'TANCOS', size: 0.04, type: 'city' }, // LPTN
    { lat: 41.274, lng: -7.72, city: 'VILA REAL', size: 0.04, type: 'city' }, // LPVR
    { lat: 40.725, lng: -7.889, city: 'VISEU', size: 0.04, type: 'city' }, // LPVZ
    { lat: 44.941, lng: 17.298, city: 'BANJA LUKA', size: 0.04, type: 'city' }, // LQBK
    { lat: 43.283, lng: 17.846, city: 'MOSTAR', size: 0.04, type: 'city' }, // LQMO
    { lat: 43.824, lng: 18.331, city: 'SARAJEVO', size: 0.04, type: 'city' }, // LQSA
    { lat: 46.176, lng: 21.262, city: 'ARAD', size: 0.04, type: 'city' }, // LRAR
    { lat: 46.522, lng: 26.91, city: 'BACAU', size: 0.04, type: 'city' }, // LRBC
    { lat: 47.658, lng: 23.47, city: 'TAUTII MAGHERAUS', size: 0.04, type: 'city' }, // LRBM
    { lat: 44.503, lng: 26.102, city: 'BANEASA', size: 0.04, type: 'city' }, // LRBS
    { lat: 44.362, lng: 28.488, city: 'MIHAIL KOGALNICEANU', size: 0.04, type: 'city' }, // LRCK
    { lat: 46.785, lng: 23.686, city: 'SOMESENI', size: 0.04, type: 'city' }, // LRCL
    { lat: 45.42, lng: 22.253, city: 'CARANSEBES', size: 0.04, type: 'city' }, // LRCS
    { lat: 44.318, lng: 23.889, city: 'CRAIOVA', size: 0.04, type: 'city' }, // LRCV
    { lat: 47.179, lng: 27.62, city: 'IASI', size: 0.04, type: 'city' }, // LRIA
    { lat: 47.025, lng: 21.902, city: 'ORADEA', size: 0.04, type: 'city' }, // LROD
    { lat: 44.574, lng: 26.103, city: 'OTOPENI', size: 0.04, type: 'city' }, // LROP
    { lat: 45.786, lng: 24.091, city: 'SIBIU', size: 0.04, type: 'city' }, // LRSB
    { lat: 47.703, lng: 22.886, city: 'SATU MARE', size: 0.04, type: 'city' }, // LRSM
    { lat: 47.688, lng: 26.354, city: 'SALCEA', size: 0.04, type: 'city' }, // LRSV
    { lat: 45.062, lng: 28.714, city: 'CATALOI', size: 0.04, type: 'city' }, // LRTC
    { lat: 46.468, lng: 24.412, city: 'VIDRASAU', size: 0.04, type: 'city' }, // LRTM
    { lat: 45.81, lng: 21.338, city: 'GIARMATA', size: 0.04, type: 'city' }, // LRTR
    { lat: 46.614, lng: 7.678, city: 'REICHENBACH', size: 0.04, type: 'city' }, // LSAZ
    { lat: 47.084, lng: 6.793, city: 'LES EPLATURES', size: 0.04, type: 'city' }, // LSGC
    { lat: 46.238, lng: 6.109, city: 'GENEVA COINTRIN', size: 0.04, type: 'city' }, // LSGG
    { lat: 46.488, lng: 7.251, city: 'SAANEN', size: 0.04, type: 'city' }, // LSGK
    { lat: 46.219, lng: 7.327, city: 'SION', size: 0.04, type: 'city' }, // LSGS
    { lat: 46.944, lng: 8.284, city: 'ALPNACH', size: 0.04, type: 'city' }, // LSMA
    { lat: 46.501, lng: 8.296, city: 'ULRICHEN', size: 0.04, type: 'city' }, // LSMC
    { lat: 47.399, lng: 8.648, city: 'DUBENDORF', size: 0.04, type: 'city' }, // LSMD
    { lat: 47.092, lng: 8.305, city: 'EMMEN', size: 0.04, type: 'city' }, // LSME
    { lat: 47.079, lng: 9.065, city: 'MOLLIS', size: 0.04, type: 'city' }, // LSMF
    { lat: 46.676, lng: 7.879, city: 'INTERLAKEN', size: 0.04, type: 'city' }, // LSMI
    { lat: 46.304, lng: 7.714, city: 'TURTMANN', size: 0.04, type: 'city' }, // LSMJ
    { lat: 46.743, lng: 8.11, city: 'MEIRINGEN', size: 0.04, type: 'city' }, // LSMM
    { lat: 46.304, lng: 7.823, city: 'RARON', size: 0.04, type: 'city' }, // LSMN
    { lat: 46.843, lng: 6.915, city: 'PAYERNE', size: 0.04, type: 'city' }, // LSMP
    { lat: 46.975, lng: 8.399, city: 'BUOCHS AIRPORT', size: 0.04, type: 'city' }, // LSMU
    { lat: 47.383, lng: 8.567, city: 'ZURICH MET', size: 0.04, type: 'city' }, // LSSW
    { lat: 46.004, lng: 8.911, city: 'LUGANO', size: 0.04, type: 'city' }, // LSZA
    { lat: 46.914, lng: 7.497, city: 'BERN BELP', size: 0.04, type: 'city' }, // LSZB
    { lat: 47.181, lng: 7.417, city: 'GRENCHEN', size: 0.04, type: 'city' }, // LSZG
    { lat: 47.465, lng: 8.549, city: 'ZURICH', size: 0.04, type: 'city' }, // LSZH
    { lat: 47.485, lng: 9.561, city: 'ST GALLEN ALTENRHEIN', size: 0.04, type: 'city' }, // LSZR
    { lat: 46.532, lng: 9.883, city: 'SAMEDAN', size: 0.04, type: 'city' }, // LSZS
    { lat: 40.0, lng: 32.0, city: 'ANKARA ACC', size: 0.04, type: 'city' }, // LTAA
    { lat: 39.935, lng: 32.741, city: 'GUVERCINLIK', size: 0.04, type: 'city' }, // LTAB
    { lat: 40.128, lng: 32.995, city: 'ESENBOGA', size: 0.04, type: 'city' }, // LTAC
    { lat: 39.95, lng: 32.689, city: 'ETIMESGUT', size: 0.04, type: 'city' }, // LTAD
    { lat: 40.079, lng: 32.566, city: 'AKINCI', size: 0.04, type: 'city' }, // LTAE
    { lat: 36.982, lng: 35.28, city: 'ADANA', size: 0.04, type: 'city' }, // LTAF
    { lat: 37.002, lng: 35.426, city: 'INCIRLIK AB', size: 0.04, type: 'city' }, // LTAG
    { lat: 38.726, lng: 30.601, city: 'AFYON', size: 0.04, type: 'city' }, // LTAH
    { lat: 36.901, lng: 30.792, city: 'ANTALYA', size: 0.04, type: 'city' }, // LTAI
    { lat: 36.948, lng: 37.479, city: 'OGUZELI', size: 0.04, type: 'city' }, // LTAJ
    { lat: 36.573, lng: 36.154, city: 'ISKENDERUN', size: 0.04, type: 'city' }, // LTAK
    { lat: 41.314, lng: 33.796, city: 'KASTAMONU', size: 0.04, type: 'city' }, // LTAL
    { lat: 37.979, lng: 32.562, city: 'KONYA', size: 0.04, type: 'city' }, // LTAN
    { lat: 40.829, lng: 35.522, city: 'MERZIFON', size: 0.04, type: 'city' }, // LTAP
    { lat: 41.276, lng: 36.304, city: 'SAMSUN AIRPORT', size: 0.04, type: 'city' }, // LTAQ
    { lat: 39.814, lng: 36.903, city: 'SIVAS', size: 0.04, type: 'city' }, // LTAR
    { lat: 41.516, lng: 32.1, city: 'CAYCUMA', size: 0.04, type: 'city' }, // LTAS
    { lat: 38.436, lng: 38.092, city: 'ERHAC', size: 0.04, type: 'city' }, // LTAT
    { lat: 38.77, lng: 35.495, city: 'ERKILET', size: 0.04, type: 'city' }, // LTAU
    { lat: 39.451, lng: 31.365, city: 'SIVRIHISAR', size: 0.04, type: 'city' }, // LTAV
    { lat: 40.305, lng: 36.368, city: 'TOKAT', size: 0.04, type: 'city' }, // LTAW
    { lat: 41.254, lng: 31.415, city: 'ERDEMIR', size: 0.04, type: 'city' }, // LTAX
    { lat: 37.785, lng: 29.701, city: 'CARDAK', size: 0.04, type: 'city' }, // LTAY
    { lat: 38.772, lng: 34.534, city: 'KAPADOKYA', size: 0.04, type: 'city' }, // LTAZ
    { lat: 40.977, lng: 28.821, city: 'ATATURK', size: 0.04, type: 'city' }, // LTBA
    { lat: 37.816, lng: 27.886, city: 'CILDIR', size: 0.04, type: 'city' }, // LTBD
    { lat: 40.232, lng: 29.009, city: 'BURSA', size: 0.04, type: 'city' }, // LTBE
    { lat: 39.619, lng: 27.925, city: 'BALIKESIR', size: 0.04, type: 'city' }, // LTBF
    { lat: 40.318, lng: 27.977, city: 'BANDIRMA', size: 0.04, type: 'city' }, // LTBG
    { lat: 40.138, lng: 26.427, city: 'CANAKKALE', size: 0.04, type: 'city' }, // LTBH
    { lat: 39.784, lng: 30.582, city: 'ESKISEHIR', size: 0.04, type: 'city' }, // LTBI
    { lat: 38.292, lng: 27.157, city: 'ADNAN MENDERES', size: 0.04, type: 'city' }, // LTBJ
    { lat: 38.319, lng: 27.16, city: 'GAZIEMIR', size: 0.04, type: 'city' }, // LTBK
    { lat: 38.513, lng: 27.01, city: 'CIGLI', size: 0.04, type: 'city' }, // LTBL
    { lat: 37.785, lng: 30.582, city: 'ISPARTA', size: 0.04, type: 'city' }, // LTBM
    { lat: 39.427, lng: 30.016, city: 'KUTAHYA', size: 0.04, type: 'city' }, // LTBN
    { lat: 38.681, lng: 29.471, city: 'USAK', size: 0.04, type: 'city' }, // LTBO
    { lat: 40.683, lng: 29.379, city: 'YALOVA', size: 0.04, type: 'city' }, // LTBP
    { lat: 40.735, lng: 30.083, city: 'TOPEL', size: 0.04, type: 'city' }, // LTBQ
    { lat: 40.255, lng: 29.563, city: 'YENISEHIR', size: 0.04, type: 'city' }, // LTBR
    { lat: 36.713, lng: 28.793, city: 'DALAMAN', size: 0.04, type: 'city' }, // LTBS
    { lat: 38.809, lng: 27.834, city: 'AKHISAR', size: 0.04, type: 'city' }, // LTBT
    { lat: 41.138, lng: 27.919, city: 'CORLU', size: 0.04, type: 'city' }, // LTBU
    { lat: 40.993, lng: 29.216, city: 'SAMANDIRA', size: 0.04, type: 'city' }, // LTBX
    { lat: 39.81, lng: 30.519, city: 'ANADOLU', size: 0.04, type: 'city' }, // LTBY
    { lat: 38.607, lng: 39.291, city: 'ELAZIG', size: 0.04, type: 'city' }, // LTCA
    { lat: 37.894, lng: 40.201, city: 'DIYARBAKIR', size: 0.04, type: 'city' }, // LTCC
    { lat: 39.71, lng: 39.526, city: 'ERZINCAN', size: 0.04, type: 'city' }, // LTCD
    { lat: 39.956, lng: 41.17, city: 'ERZURUM', size: 0.04, type: 'city' }, // LTCE
    { lat: 40.562, lng: 43.115, city: 'KARS', size: 0.04, type: 'city' }, // LTCF
    { lat: 40.995, lng: 39.79, city: 'TRABZON', size: 0.04, type: 'city' }, // LTCG
    { lat: 37.092, lng: 38.846, city: 'SANLIURFA', size: 0.04, type: 'city' }, // LTCH
    { lat: 38.468, lng: 43.332, city: 'VAN', size: 0.04, type: 'city' }, // LTCI
    { lat: 37.929, lng: 41.116, city: 'BATMAN', size: 0.04, type: 'city' }, // LTCJ
    { lat: 38.754, lng: 41.661, city: 'MUS', size: 0.04, type: 'city' }, // LTCK
    { lat: 37.979, lng: 41.84, city: 'SIIRT', size: 0.04, type: 'city' }, // LTCL
    { lat: 42.019, lng: 35.079, city: 'SINOP', size: 0.04, type: 'city' }, // LTCM
    { lat: 38.517, lng: 26.977, city: 'KAKLIC', size: 0.04, type: 'city' }, // LTFA
    { lat: 37.951, lng: 27.329, city: 'EFES', size: 0.04, type: 'city' }, // LTFB
    { lat: 47.838, lng: 27.781, city: 'BALTI', size: 0.04, type: 'city' }, // LUBL
    { lat: 46.928, lng: 28.931, city: 'CHISINAU', size: 0.04, type: 'city' }, // LUKK
    { lat: 41.18, lng: 20.742, city: 'OHRID', size: 0.04, type: 'city' }, // LWOH
    { lat: 41.961, lng: 21.621, city: 'SKOPJE', size: 0.04, type: 'city' }, // LWSK
    { lat: 36.151, lng: -5.349, city: 'GIBRALTAR', size: 0.04, type: 'city' }, // LXGB
    { lat: 44.818, lng: 20.309, city: 'BEOGRAD', size: 0.04, type: 'city' }, // LYBE
    { lat: 42.359, lng: 19.252, city: 'PODGORICA', size: 0.04, type: 'city' }, // LYPG
    { lat: 42.573, lng: 21.036, city: 'PRISTINA', size: 0.04, type: 'city' }, // LYPR
    { lat: 42.404, lng: 18.723, city: 'TIVAT', size: 0.04, type: 'city' }, // LYTV
    { lat: 45.147, lng: 21.31, city: 'VRSAC', size: 0.04, type: 'city' }, // LYVR
    { lat: 48.17, lng: 17.212, city: 'M R STEFANIK', size: 0.04, type: 'city' }, // LZIB
    { lat: 48.663, lng: 21.241, city: 'KOSICE', size: 0.04, type: 'city' }, // LZKZ
    { lat: 48.402, lng: 17.118, city: 'MALACKY', size: 0.04, type: 'city' }, // LZMC
    { lat: 48.625, lng: 17.828, city: 'PIESTANY', size: 0.04, type: 'city' }, // LZPP
    { lat: 48.638, lng: 19.134, city: 'SLIAC', size: 0.04, type: 'city' }, // LZSL
    { lat: 48.865, lng: 17.992, city: 'TRENCIN', size: 0.04, type: 'city' }, // LZTN
    { lat: 49.073, lng: 20.241, city: 'TATRY', size: 0.04, type: 'city' }, // LZTT
    { lat: 49.232, lng: 18.614, city: 'ZILINA', size: 0.04, type: 'city' }, // LZZI
    { lat: 21.917, lng: -71.939, city: 'NORTH CAICOS', size: 0.04, type: 'city' }, // MBNC
    { lat: 21.774, lng: -72.266, city: 'PROVIDENCIALES', size: 0.04, type: 'city' }, // MBPV
    { lat: 21.516, lng: -71.528, city: 'SOUTH CAICOS', size: 0.04, type: 'city' }, // MBSC
    { lat: 19.199, lng: -69.43, city: 'ARROYO BARRIL', size: 0.04, type: 'city' }, // MDAB
    { lat: 18.251, lng: -71.12, city: 'MARIA MONTEZ INTERNATIONAL', size: 0.04, type: 'city' }, // MDBH
    { lat: 17.929, lng: -71.645, city: 'CABO ROJO', size: 0.04, type: 'city' }, // MDCR
    { lat: 18.908, lng: -70.72, city: 'CONSTANZA', size: 0.04, type: 'city' }, // MDCZ
    { lat: 18.471, lng: -69.969, city: 'HERRERA INTERNATIONAL', size: 0.04, type: 'city' }, // MDHE
    { lat: 18.452, lng: -68.912, city: 'LA ROMANA INTERNATIONAL', size: 0.04, type: 'city' }, // MDLR
    { lat: 18.567, lng: -68.363, city: 'PUNTA CANA INTERNATIONAL', size: 0.04, type: 'city' }, // MDPC
    { lat: 19.757, lng: -70.57, city: 'GREGORIO LUPERON INTERNATIONAL', size: 0.04, type: 'city' }, // MDPP
    { lat: 18.429, lng: -69.669, city: 'LAS AMERICAS INTERNATIONAL', size: 0.04, type: 'city' }, // MDSD
    { lat: 18.504, lng: -69.762, city: 'SAN ISIDRO AB', size: 0.04, type: 'city' }, // MDSI
    { lat: 19.409, lng: -70.616, city: 'CIBAO INTERNATIONAL', size: 0.04, type: 'city' }, // MDST
    { lat: 15.473, lng: -88.837, city: 'BANANERA', size: 0.04, type: 'city' }, // MGBN
    { lat: 15.469, lng: -90.407, city: 'COBAN', size: 0.04, type: 'city' }, // MGCB
    { lat: 14.583, lng: -90.528, city: 'LA AURORA', size: 0.04, type: 'city' }, // MGGT
    { lat: 15.731, lng: -88.584, city: 'PUERTO BARRIOS', size: 0.04, type: 'city' }, // MGPB
    { lat: 16.326, lng: -89.417, city: 'POPTUN', size: 0.04, type: 'city' }, // MGPP
    { lat: 14.865, lng: -91.502, city: 'QUEZALTENANGO', size: 0.04, type: 'city' }, // MGQZ
    { lat: 14.521, lng: -91.697, city: 'RETALHULEU', size: 0.04, type: 'city' }, // MGRT
    { lat: 13.936, lng: -90.836, city: 'SAN JOSE', size: 0.04, type: 'city' }, // MGSJ
    { lat: 17.407, lng: -83.933, city: 'ISLAS DEL CISNE', size: 0.04, type: 'city' }, // MHIC
    { lat: 15.742, lng: -86.853, city: 'GOLOSON INTERNATIONAL', size: 0.04, type: 'city' }, // MHLC
    { lat: 15.452, lng: -87.923, city: 'LA MESA INTERNATIONAL', size: 0.04, type: 'city' }, // MHLM
    { lat: 16.445, lng: -85.906, city: 'GUANAJA', size: 0.04, type: 'city' }, // MHNJ
    { lat: 15.261, lng: -83.781, city: 'PUERTO LEMPIRA', size: 0.04, type: 'city' }, // MHPL
    { lat: 16.317, lng: -86.522, city: 'ROATAN', size: 0.04, type: 'city' }, // MHRO
    { lat: 15.776, lng: -87.476, city: 'TELA', size: 0.04, type: 'city' }, // MHTE
    { lat: 14.061, lng: -87.217, city: 'TONCONTIN INTERNATIONAL', size: 0.04, type: 'city' }, // MHTG
    { lat: 15.927, lng: -85.938, city: 'TRUJILLO', size: 0.04, type: 'city' }, // MHTJ
    { lat: 18.404, lng: -76.969, city: 'BOSCOBEL', size: 0.04, type: 'city' }, // MKBS
    { lat: 17.936, lng: -76.787, city: 'NORMAN MANLEY INTERNATIONAL', size: 0.04, type: 'city' }, // MKJP
    { lat: 18.504, lng: -77.913, city: 'SANGSTER INTERNATIONAL', size: 0.04, type: 'city' }, // MKJS
    { lat: 18.199, lng: -76.534, city: 'KEN JONES', size: 0.04, type: 'city' }, // MKKJ
    { lat: 17.988, lng: -76.824, city: 'TINSON PEN', size: 0.04, type: 'city' }, // MKTP
    { lat: 16.757, lng: -99.753, city: 'GENERAL JUAN N ALVAREZ INTERNATIONAL', size: 0.04, type: 'city' }, // MMAA
    { lat: 25.866, lng: -100.237, city: 'DEL NORTE INTERNATIONAL', size: 0.04, type: 'city' }, // MMAN
    { lat: 21.705, lng: -102.318, city: 'JESUS TERAN INTERNATIONAL', size: 0.04, type: 'city' }, // MMAS
    { lat: 15.775, lng: -96.261, city: 'BAHIAS DE HUATULCO INTERNATIONAL', size: 0.04, type: 'city' }, // MMBT
    { lat: 18.835, lng: -99.262, city: 'CUERNAVACA', size: 0.04, type: 'city' }, // MMCB
    { lat: 29.332, lng: -100.981, city: 'CIUDAD ACUNA INTERNATIONAL', size: 0.04, type: 'city' }, // MMCC
    { lat: 18.654, lng: -91.799, city: 'CIUDAD DEL CARMEN INTERNATIONAL', size: 0.04, type: 'city' }, // MMCE
    { lat: 30.397, lng: -107.875, city: 'NUEVO CASAS GRANDES', size: 0.04, type: 'city' }, // MMCG
    { lat: 17.574, lng: -99.514, city: 'CHILPANCINGO', size: 0.04, type: 'city' }, // MMCH
    { lat: 24.764, lng: -107.474, city: 'CULIACAN INTERNATIONAL', size: 0.04, type: 'city' }, // MMCL
    { lat: 18.504, lng: -88.327, city: 'CHETUMAL INTERNATIONAL', size: 0.04, type: 'city' }, // MMCM
    { lat: 27.392, lng: -109.833, city: 'CIUDAD OBREGON INTERNATIONAL', size: 0.04, type: 'city' }, // MMCN
    { lat: 19.817, lng: -90.5, city: 'INGENIERO ALBERTO ACUNA ONGAY INTERNATIONAL', size: 0.04, type: 'city' }, // MMCP
    { lat: 31.636, lng: -106.429, city: 'ABRAHAM GONZALEZ INTERNATIONAL', size: 0.04, type: 'city' }, // MMCS
    { lat: 28.703, lng: -105.964, city: 'GENERAL R FIERRO VILLALOBOS INTERNATIONAL', size: 0.04, type: 'city' }, // MMCU
    { lat: 23.704, lng: -98.956, city: 'CIUDAD VICTORIA', size: 0.04, type: 'city' }, // MMCV
    { lat: 20.546, lng: -100.886, city: 'CELAYA', size: 0.04, type: 'city' }, // MMCY
    { lat: 20.522, lng: -86.926, city: 'COZUMEL INTERNATIONAL', size: 0.04, type: 'city' }, // MMCZ
    { lat: 22.74, lng: -99.018, city: 'CIUDAD MANTE', size: 0.04, type: 'city' }, // MMDM
    { lat: 24.124, lng: -104.528, city: 'DURANGO INTERNATIONAL', size: 0.04, type: 'city' }, // MMDO
    { lat: 21.419, lng: -104.843, city: 'TEPIC', size: 0.04, type: 'city' }, // MMEP
    { lat: 31.795, lng: -116.602, city: 'GENERAL ALBERTO L SALINAS C INTERNATIONAL', size: 0.04, type: 'city' }, // MMES
    { lat: 20.522, lng: -103.311, city: 'DON MIGUEL Y HIDALGO INTERNATIONAL', size: 0.04, type: 'city' }, // MMGL
    { lat: 27.969, lng: -110.925, city: 'GENERAL JOSE MARIA YANEZ INTERNATIONAL', size: 0.04, type: 'city' }, // MMGM
    { lat: 18.497, lng: -97.42, city: 'TEHUACAN', size: 0.04, type: 'city' }, // MMHC
    { lat: 29.096, lng: -111.048, city: 'GENERAL IGNACIO P GARCIA INTERNATIONAL', size: 0.04, type: 'city' }, // MMHO
    { lat: 19.277, lng: -103.577, city: 'COLIMA', size: 0.04, type: 'city' }, // MMIA
    { lat: 21.245, lng: -86.74, city: 'ISLA MUJERES', size: 0.04, type: 'city' }, // MMIM
    { lat: 25.549, lng: -100.929, city: 'PLAN DE GUADALUPE INTERNATIONAL', size: 0.04, type: 'city' }, // MMIO
    { lat: 16.449, lng: -95.094, city: 'IXTEPEC', size: 0.04, type: 'city' }, // MMIT
    { lat: 19.475, lng: -96.797, city: 'LENCERO', size: 0.04, type: 'city' }, // MMJA
    { lat: 18.002, lng: -102.22, city: 'LAZARO CARDENAS', size: 0.04, type: 'city' }, // MMLC
    { lat: 25.685, lng: -109.081, city: 'VALLE DEL FUERTE INTERNATIONAL', size: 0.04, type: 'city' }, // MMLM
    { lat: 20.993, lng: -101.481, city: 'DE GUANAJUATO INTERNATIONAL', size: 0.04, type: 'city' }, // MMLO
    { lat: 24.072, lng: -110.362, city: 'GENERAL MANUEL MARQUEZ DE LEON INTERNATIONAL', size: 0.04, type: 'city' }, // MMLP
    { lat: 25.989, lng: -111.348, city: 'LORETO INTERNATIONAL', size: 0.04, type: 'city' }, // MMLT
    { lat: 25.77, lng: -97.525, city: 'GENERAL SERVANDO CANALES INTERNATIONAL', size: 0.04, type: 'city' }, // MMMA
    { lat: 20.937, lng: -89.657, city: 'LICENCIADO MANUEL CRECENCIO REJON INTERNATIONAL', size: 0.04, type: 'city' }, // MMMD
    { lat: 32.631, lng: -115.241, city: 'GENERAL RODOLFO SANCHEZ TABOADA INTERNATIONAL', size: 0.04, type: 'city' }, // MMML
    { lat: 19.85, lng: -101.025, city: 'GENERAL FRANCISCO J MUJICA', size: 0.04, type: 'city' }, // MMMM
    { lat: 18.103, lng: -94.581, city: 'MINATITLAN', size: 0.04, type: 'city' }, // MMMT
    { lat: 26.956, lng: -101.47, city: 'MONCLOVA INTERNATIONAL', size: 0.04, type: 'city' }, // MMMV
    { lat: 19.436, lng: -99.072, city: 'LICENCIADO BENITO JUAREZ INTERNATIONAL', size: 0.04, type: 'city' }, // MMMX
    { lat: 25.778, lng: -100.107, city: 'GENERAL MARIANO ESCOBEDO INTERNATIONAL', size: 0.04, type: 'city' }, // MMMY
    { lat: 23.161, lng: -106.266, city: 'GENERAL RAFAEL BUELNA INTERNATIONAL', size: 0.04, type: 'city' }, // MMMZ
    { lat: 31.226, lng: -110.976, city: 'NOGALES INTERNATIONAL', size: 0.04, type: 'city' }, // MMNG
    { lat: 27.444, lng: -99.57, city: 'QUETZALCOATL INTERNATIONAL', size: 0.04, type: 'city' }, // MMNL
    { lat: 17.0, lng: -96.726, city: 'XOXOCOTLAN INTERNATIONAL', size: 0.04, type: 'city' }, // MMOX
    { lat: 20.603, lng: -97.461, city: 'TAJIN', size: 0.04, type: 'city' }, // MMPA
    { lat: 19.158, lng: -98.371, city: 'HERMANOS SERDAN INTERNATIONAL', size: 0.04, type: 'city' }, // MMPB
    { lat: 20.077, lng: -98.782, city: 'INGENIERO JUAN GUILLERMO VILLASANA', size: 0.04, type: 'city' }, // MMPC
    { lat: 31.352, lng: -113.526, city: 'PUNTA PENASCO', size: 0.04, type: 'city' }, // MMPE
    { lat: 28.627, lng: -100.535, city: 'PIEDRAS NEGRAS INTERNATIONAL', size: 0.04, type: 'city' }, // MMPG
    { lat: 19.397, lng: -102.039, city: 'LICENCIADO Y GEN IGNACIO LOPEZ RAYON', size: 0.04, type: 'city' }, // MMPN
    { lat: 20.68, lng: -105.254, city: 'LICENCIADO GUSTAVO DIAZ ORDAZ INTERNATIONAL', size: 0.04, type: 'city' }, // MMPR
    { lat: 15.877, lng: -97.089, city: 'PUERTO ESCONDIDO', size: 0.04, type: 'city' }, // MMPS
    { lat: 20.624, lng: -100.369, city: 'INGENIERO F ESPINOZA GUTIERREZ INTERNATIONAL', size: 0.04, type: 'city' }, // MMQT
    { lat: 26.009, lng: -98.228, city: 'GENERAL LUCIO BLANCO INTERNATIONAL', size: 0.04, type: 'city' }, // MMRX
    { lat: 23.152, lng: -109.721, city: 'LOS CABOS INTERNATIONAL', size: 0.04, type: 'city' }, // MMSD
    { lat: 30.93, lng: -114.809, city: 'SAN FELIPE', size: 0.04, type: 'city' }, // MMSF
    { lat: 22.254, lng: -100.931, city: 'PONCIANO ARRIAGA INTERNATIONAL', size: 0.04, type: 'city' }, // MMSP
    { lat: 19.536, lng: -98.173, city: 'TLAXCALA', size: 0.04, type: 'city' }, // MMTA
    { lat: 25.568, lng: -103.411, city: 'TORREON INTERNATIONAL', size: 0.04, type: 'city' }, // MMTC
    { lat: 16.769, lng: -93.341, city: 'FRANCISCO SARABIA', size: 0.04, type: 'city' }, // MMTG
    { lat: 32.541, lng: -116.97, city: 'GENERAL ABELARDO L RODRIGUEZ INTERNATIONAL', size: 0.04, type: 'city' }, // MMTJ
    { lat: 22.296, lng: -97.866, city: 'GENERAL FRANCISCO JAVIER MINA INTERNATIONAL', size: 0.04, type: 'city' }, // MMTM
    { lat: 22.038, lng: -98.806, city: 'TAMUIN', size: 0.04, type: 'city' }, // MMTN
    { lat: 19.337, lng: -99.566, city: 'LICENCIADO ADOLFO LOPEZ MATEOS INTERNATIONAL', size: 0.04, type: 'city' }, // MMTO
    { lat: 14.794, lng: -92.37, city: 'TAPACHULA INTERNATIONAL', size: 0.04, type: 'city' }, // MMTP
    { lat: 19.598, lng: -103.372, city: 'ZAPOTILTIC', size: 0.04, type: 'city' }, // MMTX
    { lat: 21.036, lng: -86.877, city: 'CANCUN INTERNATIONAL', size: 0.04, type: 'city' }, // MMUN
    { lat: 17.997, lng: -92.817, city: 'C P A CARLOS ROVIROSA INTERNATIONAL', size: 0.04, type: 'city' }, // MMVA
    { lat: 19.145, lng: -96.187, city: 'GENERAL HERIBERTO JARA INTERNATIONAL', size: 0.04, type: 'city' }, // MMVR
    { lat: 22.897, lng: -102.687, city: 'GENERAL LEOBARDO C RUIZ INTERNATIONAL', size: 0.04, type: 'city' }, // MMZC
    { lat: 17.601, lng: -101.46, city: 'IXTAPA ZIHUATANEJO INTERNATIONAL', size: 0.04, type: 'city' }, // MMZH
    { lat: 20.045, lng: -102.276, city: 'ZAMORA', size: 0.04, type: 'city' }, // MMZM
    { lat: 19.145, lng: -104.559, city: 'PLAYA DE ORO INTERNATIONAL', size: 0.04, type: 'city' }, // MMZO
    { lat: 20.756, lng: -103.465, city: 'ZAPOPAN', size: 0.04, type: 'city' }, // MMZP
    { lat: 11.989, lng: -83.774, city: 'BLUEFIELDS', size: 0.04, type: 'city' }, // MNBL
    { lat: 12.189, lng: -86.354, city: 'LOS BRASILES', size: 0.04, type: 'city' }, // MNBR
    { lat: 12.428, lng: -86.902, city: 'FANOR URROZ', size: 0.04, type: 'city' }, // MNLN
    { lat: 12.141, lng: -86.168, city: 'MANAGUA INTERNATIONAL', size: 0.04, type: 'city' }, // MNMG
    { lat: 14.047, lng: -83.387, city: 'PUERTO CABEZAS', size: 0.04, type: 'city' }, // MNPC
    { lat: 9.341, lng: -82.251, city: 'BOCAS DEL TORO', size: 0.04, type: 'city' }, // MPBO
    { lat: 9.459, lng: -82.517, city: 'CAP MANUEL NINO INTERNATIONAL', size: 0.04, type: 'city' }, // MPCH
    { lat: 8.391, lng: -82.435, city: 'ENRIQUE MALEK INTERNATIONAL', size: 0.04, type: 'city' }, // MPDA
    { lat: 8.914, lng: -79.599, city: 'HOWARD AFB', size: 0.04, type: 'city' }, // MPHO
    { lat: 7.517, lng: -78.157, city: 'JAQUE', size: 0.04, type: 'city' }, // MPJE
    { lat: 8.407, lng: -78.142, city: 'CAP RAMON XATRUCH', size: 0.04, type: 'city' }, // MPLP
    { lat: 8.973, lng: -79.556, city: 'MARCOS A GELABERT INTERNATIONAL', size: 0.04, type: 'city' }, // MPMG
    { lat: 8.086, lng: -80.945, city: 'RUBEN CANTU', size: 0.04, type: 'city' }, // MPSA
    { lat: 9.071, lng: -79.383, city: 'TOCUMEN INTERNATIONAL', size: 0.04, type: 'city' }, // MPTO
    { lat: 9.167, lng: -83.332, city: 'BUENOS AIRES', size: 0.04, type: 'city' }, // MRBA
    { lat: 10.769, lng: -83.586, city: 'BARRA DEL COLORADO', size: 0.04, type: 'city' }, // MRBC
    { lat: 8.601, lng: -82.97, city: 'COTO 47', size: 0.04, type: 'city' }, // MRCC
    { lat: 10.356, lng: -85.853, city: 'CABO VELAS', size: 0.04, type: 'city' }, // MRCV
    { lat: 10.202, lng: -83.472, city: 'EL CARMEN', size: 0.04, type: 'city' }, // MREC
    { lat: 8.916, lng: -83.507, city: 'NUEVO PALMAR SUR', size: 0.04, type: 'city' }, // MRFI
    { lat: 8.652, lng: -83.065, city: 'FINCA 63', size: 0.04, type: 'city' }, // MRFS
    { lat: 8.654, lng: -83.182, city: 'GOLFITO', size: 0.04, type: 'city' }, // MRGF
    { lat: 10.217, lng: -83.795, city: 'GUAPILES', size: 0.04, type: 'city' }, // MRGP
    { lat: 10.593, lng: -85.544, city: 'DANIEL ODUBER QUIROS INTERNATIONAL', size: 0.04, type: 'city' }, // MRLB
    { lat: 11.035, lng: -84.706, city: 'LOS CHILES', size: 0.04, type: 'city' }, // MRLC
    { lat: 9.958, lng: -83.022, city: 'LIMON INTERNATIONAL', size: 0.04, type: 'city' }, // MRLM
    { lat: 9.976, lng: -85.653, city: 'NOSARA', size: 0.04, type: 'city' }, // MRNS
    { lat: 9.994, lng: -84.209, city: 'JUAN SANTAMARIA INTERNATIONAL', size: 0.04, type: 'city' }, // MROC
    { lat: 9.732, lng: -82.983, city: 'PANDORA', size: 0.04, type: 'city' }, // MRPD
    { lat: 8.951, lng: -83.468, city: 'PALMAR SUR', size: 0.04, type: 'city' }, // MRPM
    { lat: 9.957, lng: -84.142, city: 'TOBIAS BOLANOS INTERNATIONAL', size: 0.04, type: 'city' }, // MRPV
    { lat: 9.443, lng: -84.13, city: 'QUEPOS MANAGUA', size: 0.04, type: 'city' }, // MRQP
    { lat: 10.288, lng: -83.714, city: 'SANTA CLARA DE GUAPILES', size: 0.04, type: 'city' }, // MRSG
    { lat: 8.826, lng: -82.959, city: 'SAN VITO DE JAVA', size: 0.04, type: 'city' }, // MRSV
    { lat: 13.441, lng: -89.056, city: 'EL SALVADOR INTERNATIONAL', size: 0.04, type: 'city' }, // MSLP
    { lat: 13.7, lng: -89.12, city: 'ILOPANGO INTERNATIONAL', size: 0.04, type: 'city' }, // MSSS
    { lat: 19.732, lng: -72.195, city: 'CAP HAITIEN', size: 0.04, type: 'city' }, // MTCH
    { lat: 18.58, lng: -72.293, city: 'PORT AU PRINCE INTERNATIONAL', size: 0.04, type: 'city' }, // MTPP
    { lat: 20.366, lng: -74.506, city: 'GUSTAVO RIZO', size: 0.04, type: 'city' }, // MUBA
    { lat: 20.396, lng: -76.621, city: 'CARLOS MANUEL DE CESPEDES', size: 0.04, type: 'city' }, // MUBY
    { lat: 22.027, lng: -78.789, city: 'MAXIMO GOMEZ', size: 0.04, type: 'city' }, // MUCA
    { lat: 22.506, lng: -79.47, city: 'CAIBARIEN', size: 0.04, type: 'city' }, // MUCB
    { lat: 22.461, lng: -78.329, city: 'JARDINES DEL RAY', size: 0.04, type: 'city' }, // MUCC
    { lat: 22.15, lng: -80.414, city: 'JAIME GONZALEZ', size: 0.04, type: 'city' }, // MUCF
    { lat: 21.616, lng: -81.546, city: 'VILO ACUNA', size: 0.04, type: 'city' }, // MUCL
    { lat: 21.42, lng: -77.847, city: 'IGNACIO AGRAMONTE INTERNATIONAL', size: 0.04, type: 'city' }, // MUCM
    { lat: 19.97, lng: -75.836, city: 'ANTONIO MACEO INTERNATIONAL', size: 0.04, type: 'city' }, // MUCU
    { lat: 21.5, lng: -78.203, city: 'FLORIDA', size: 0.04, type: 'city' }, // MUFL
    { lat: 19.906, lng: -75.207, city: 'GUANTANAMO BAY NS', size: 0.04, type: 'city' }, // MUGM
    { lat: 20.085, lng: -75.158, city: 'MARIANA GRAJALES', size: 0.04, type: 'city' }, // MUGT
    { lat: 22.989, lng: -82.409, city: 'JOSE MARTI INTERNATIONAL', size: 0.04, type: 'city' }, // MUHA
    { lat: 20.786, lng: -76.315, city: 'FRANK PAIS', size: 0.04, type: 'city' }, // MUHG
    { lat: 22.336, lng: -83.642, city: 'LA COLOMA', size: 0.04, type: 'city' }, // MULM
    { lat: 22.97, lng: -82.275, city: 'MANAGUA', size: 0.04, type: 'city' }, // MUMG
    { lat: 23.007, lng: -82.767, city: 'MARIEL', size: 0.04, type: 'city' }, // MUML
    { lat: 20.654, lng: -74.922, city: 'ORESTES ACOSTA', size: 0.04, type: 'city' }, // MUMO
    { lat: 20.288, lng: -77.089, city: 'SIERRA MAESTRA', size: 0.04, type: 'city' }, // MUMZ
    { lat: 20.689, lng: -75.531, city: 'NICARO', size: 0.04, type: 'city' }, // MUNC
    { lat: 21.835, lng: -82.784, city: 'RAFAEL PEREZ', size: 0.04, type: 'city' }, // MUNG
    { lat: 23.033, lng: -82.579, city: 'PLAYA BARACOA', size: 0.04, type: 'city' }, // MUPB
    { lat: 22.421, lng: -83.678, city: 'PINAR DEL RIO', size: 0.04, type: 'city' }, // MUPR
    { lat: 22.871, lng: -82.509, city: 'SAN ANTONIO DE LOS BANOS', size: 0.04, type: 'city' }, // MUSA
    { lat: 22.492, lng: -79.944, city: 'ABEL SANTAMARIA', size: 0.04, type: 'city' }, // MUSC
    { lat: 22.095, lng: -84.152, city: 'SAN JULIAN', size: 0.04, type: 'city' }, // MUSJ
    { lat: 21.509, lng: -77.017, city: 'ROBERTO YAGUERO', size: 0.04, type: 'city' }, // MUSL
    { lat: 21.642, lng: -82.955, city: 'SIGUANEA', size: 0.04, type: 'city' }, // MUSN
    { lat: 21.971, lng: -79.442, city: 'SANCTI SPIRITUS', size: 0.04, type: 'city' }, // MUSS
    { lat: 21.788, lng: -79.997, city: 'ALBERTO DELGADO', size: 0.04, type: 'city' }, // MUTD
    { lat: 23.034, lng: -81.435, city: 'JUAN GUALBERTO GOMEZ INTERNATIONAL', size: 0.04, type: 'city' }, // MUVR
    { lat: 20.988, lng: -76.936, city: 'HERMANOS AMEIJEIRAS', size: 0.04, type: 'city' }, // MUVT
    { lat: 19.687, lng: -79.883, city: 'GERRARD SMITH INTERNATIONAL', size: 0.04, type: 'city' }, // MWCB
    { lat: 19.293, lng: -81.357, city: 'OWEN ROBERTS INTERNATIONAL', size: 0.04, type: 'city' }, // MWCR
    { lat: 24.288, lng: -77.684, city: 'CLARENCE A BAIN', size: 0.04, type: 'city' }, // MYAB
    { lat: 24.698, lng: -77.796, city: 'ANDROS TOWN', size: 0.04, type: 'city' }, // MYAF
    { lat: 24.159, lng: -77.59, city: 'CONGO TOWN', size: 0.04, type: 'city' }, // MYAK
    { lat: 26.511, lng: -77.083, city: 'MARSH HARBOUR', size: 0.04, type: 'city' }, // MYAM
    { lat: 25.054, lng: -78.049, city: 'SAN ANDROS', size: 0.04, type: 'city' }, // MYAN
    { lat: 22.442, lng: -73.971, city: 'SPRING POINT', size: 0.04, type: 'city' }, // MYAP
    { lat: 26.004, lng: -77.395, city: 'SANDY POINT', size: 0.04, type: 'city' }, // MYAS
    { lat: 26.745, lng: -77.391, city: 'TREASURE CAY', size: 0.04, type: 'city' }, // MYAT
    { lat: 25.417, lng: -77.881, city: 'CHUB CAY', size: 0.04, type: 'city' }, // MYBC
    { lat: 25.738, lng: -77.84, city: 'GREAT HARBOUR CAY', size: 0.04, type: 'city' }, // MYBG
    { lat: 25.7, lng: -79.264, city: 'SOUTH BIMINI', size: 0.04, type: 'city' }, // MYBS
    { lat: 24.629, lng: -75.674, city: 'ARTHURS TOWN', size: 0.04, type: 'city' }, // MYCA
    { lat: 24.315, lng: -75.454, city: 'NEW BIGHT', size: 0.04, type: 'city' }, // MYCB
    { lat: 22.746, lng: -74.182, city: 'COLONEL HILL', size: 0.04, type: 'city' }, // MYCI
    { lat: 23.563, lng: -75.878, city: 'EXUMA INTERNATIONAL', size: 0.04, type: 'city' }, // MYEF
    { lat: 25.476, lng: -76.681, city: 'NORTH ELEUTHERA', size: 0.04, type: 'city' }, // MYEH
    { lat: 25.284, lng: -76.331, city: 'GOVERNORS HARBOUR', size: 0.04, type: 'city' }, // MYEM
    { lat: 24.594, lng: -76.832, city: 'NORMANS CAY', size: 0.04, type: 'city' }, // MYEN
    { lat: 24.892, lng: -76.178, city: 'ROCK SOUND', size: 0.04, type: 'city' }, // MYER
    { lat: 24.169, lng: -76.439, city: 'STANIEL CAY', size: 0.04, type: 'city' }, // MYES
    { lat: 26.559, lng: -78.695, city: 'GRAND BAHAMA INTERNATIONAL', size: 0.04, type: 'city' }, // MYGF
    { lat: 26.686, lng: -78.978, city: 'WEST END', size: 0.04, type: 'city' }, // MYGW
    { lat: 20.975, lng: -73.667, city: 'MATTHEW TOWN', size: 0.04, type: 'city' }, // MYIG
    { lat: 23.179, lng: -75.093, city: 'DEADMANS CAY', size: 0.04, type: 'city' }, // MYLD
    { lat: 23.583, lng: -75.269, city: 'STELLA MARIS', size: 0.04, type: 'city' }, // MYLS
    { lat: 22.379, lng: -73.013, city: 'MAYAGUANA', size: 0.04, type: 'city' }, // MYMM
    { lat: 25.039, lng: -77.466, city: 'NASSAU INTERNATIONAL', size: 0.04, type: 'city' }, // MYNN
    { lat: 22.182, lng: -75.729, city: 'DUNCAN TOWN', size: 0.04, type: 'city' }, // MYRD
    { lat: 24.063, lng: -74.524, city: 'SAN SALVADOR', size: 0.04, type: 'city' }, // MYSM
    { lat: 17.539, lng: -88.308, city: 'PHILIP S W GOLDSON INTERNATIONAL', size: 0.04, type: 'city' }, // MZBZ
    { lat: -18.825, lng: -159.774, city: 'AITUTAKI', size: 0.04, type: 'city' }, // NCAI
    { lat: -21.203, lng: -159.806, city: 'RAROTONGA INTERNATIONAL', size: 0.04, type: 'city' }, // NCRG
    { lat: -17.754, lng: 177.443, city: 'NADI INTERNATIONAL', size: 0.04, type: 'city' }, // NFFN
    { lat: -18.043, lng: 178.559, city: 'NAUSORI INTERNATIONAL', size: 0.04, type: 'city' }, // NFNA
    { lat: -16.467, lng: 179.34, city: 'LABASA', size: 0.04, type: 'city' }, // NFNL
    { lat: -21.241, lng: -175.15, city: 'FUA AMOTU INTERNATIONAL', size: 0.04, type: 'city' }, // NFTF
    { lat: -19.777, lng: -174.341, city: 'HAAPAI', size: 0.04, type: 'city' }, // NFTL
    { lat: -18.585, lng: -173.963, city: 'VAVAU INTERNATIONAL', size: 0.04, type: 'city' }, // NFTV
    { lat: -8.517, lng: 179.217, city: 'FUNAFUTI INTERNATIONAL AIRPORT', size: 0.04, type: 'city' }, // NGFU
    { lat: 1.381, lng: 173.147, city: 'BONRIKI INTERNATIONAL', size: 0.04, type: 'city' }, // NGTA
    { lat: -1.224, lng: 174.776, city: 'TABITEUEA NORTH', size: 0.04, type: 'city' }, // NGTE
    { lat: -19.08, lng: -169.926, city: 'NIUE INTERNATIONAL', size: 0.04, type: 'city' }, // NIUE
    { lat: -13.238, lng: -176.199, city: 'HIHIFO', size: 0.04, type: 'city' }, // NLWW
    { lat: -13.83, lng: -172.008, city: 'FALEOLO INTERNATIONAL', size: 0.04, type: 'city' }, // NSFA
    { lat: -14.331, lng: -170.71, city: 'PAGO PAGO INTERNATIONAL', size: 0.04, type: 'city' }, // NSTU
    { lat: -22.434, lng: -151.361, city: 'RURUTU', size: 0.04, type: 'city' }, // NTAR
    { lat: -23.365, lng: -149.524, city: 'TUBUAI', size: 0.04, type: 'city' }, // NTAT
    { lat: -17.353, lng: -145.51, city: 'ANAA', size: 0.04, type: 'city' }, // NTGA
    { lat: -15.82, lng: -140.887, city: 'FANGATAU', size: 0.04, type: 'city' }, // NTGB
    { lat: -15.119, lng: -148.231, city: 'TIKEHAU', size: 0.04, type: 'city' }, // NTGC
    { lat: -18.466, lng: -136.439, city: 'REAO', size: 0.04, type: 'city' }, // NTGE
    { lat: -16.054, lng: -145.657, city: 'FAKARAVA', size: 0.04, type: 'city' }, // NTGF
    { lat: -14.437, lng: -146.07, city: 'MANIHI', size: 0.04, type: 'city' }, // NTGI
    { lat: -23.08, lng: -134.89, city: 'TOTEGEGIE', size: 0.04, type: 'city' }, // NTGJ
    { lat: -15.663, lng: -146.885, city: 'KAUKURA', size: 0.04, type: 'city' }, // NTGK
    { lat: -16.585, lng: -143.657, city: 'MAKEMO', size: 0.04, type: 'city' }, // NTGM
    { lat: -14.177, lng: -141.267, city: 'NAPUKA', size: 0.04, type: 'city' }, // NTGN
    { lat: -14.809, lng: -138.813, city: 'PUKA PUKA', size: 0.04, type: 'city' }, // NTGP
    { lat: -14.712, lng: -145.253, city: 'TAKAPOTO', size: 0.04, type: 'city' }, // NTGT
    { lat: -15.248, lng: -146.616, city: 'ARUTUA', size: 0.04, type: 'city' }, // NTGU
    { lat: -14.868, lng: -148.717, city: 'MATAIVA', size: 0.04, type: 'city' }, // NTGV
    { lat: -20.783, lng: -138.568, city: 'TUREIA', size: 0.04, type: 'city' }, // NTGY
    { lat: -14.456, lng: -145.024, city: 'TAKAROA', size: 0.04, type: 'city' }, // NTKR
    { lat: -8.796, lng: -140.229, city: 'NUKU HIVA', size: 0.04, type: 'city' }, // NTMD
    { lat: -9.769, lng: -139.011, city: 'ATUONA', size: 0.04, type: 'city' }, // NTMN
    { lat: -16.444, lng: -151.751, city: 'BORA BORA', size: 0.04, type: 'city' }, // NTTB
    { lat: -14.954, lng: -147.661, city: 'RANGIROA', size: 0.04, type: 'city' }, // NTTG
    { lat: -16.687, lng: -151.022, city: 'HUAHINE', size: 0.04, type: 'city' }, // NTTH
    { lat: -17.49, lng: -149.762, city: 'TEMAE', size: 0.04, type: 'city' }, // NTTM
    { lat: -18.075, lng: -140.946, city: 'HAO', size: 0.04, type: 'city' }, // NTTO
    { lat: -16.426, lng: -152.244, city: 'MAUPITI', size: 0.04, type: 'city' }, // NTTP
    { lat: -16.723, lng: -151.466, city: 'UTUROA', size: 0.04, type: 'city' }, // NTTR
    { lat: -21.808, lng: -138.794, city: 'MURUROA ATOLL', size: 0.04, type: 'city' }, // NTTX
    { lat: -15.501, lng: 167.222, city: 'SANTO PEKOA INTERNATIONAL', size: 0.04, type: 'city' }, // NVSS
    { lat: -17.699, lng: 168.32, city: 'PORT VILA BAUERFIELD', size: 0.04, type: 'city' }, // NVVV
    { lat: -21.053, lng: 164.838, city: 'KONE', size: 0.04, type: 'city' }, // NWWD
    { lat: -20.546, lng: 164.256, city: 'KOUMAC', size: 0.04, type: 'city' }, // NWWK
    { lat: -20.775, lng: 167.24, city: 'OUANAHAM', size: 0.04, type: 'city' }, // NWWL
    { lat: -22.258, lng: 166.473, city: 'NOUMEA MAGENTA', size: 0.04, type: 'city' }, // NWWM
    { lat: -21.482, lng: 168.037, city: 'LA ROCHE', size: 0.04, type: 'city' }, // NWWR
    { lat: -20.791, lng: 165.259, city: 'TOUHO', size: 0.04, type: 'city' }, // NWWU
    { lat: -20.641, lng: 166.573, city: 'OUVEA OULOUP', size: 0.04, type: 'city' }, // NWWV
    { lat: -22.014, lng: 166.213, city: 'LA TONTOUTA', size: 0.04, type: 'city' }, // NWWW
    { lat: -37.008, lng: 174.792, city: 'AUCKLAND INTERNATIONAL', size: 0.04, type: 'city' }, // NZAA
    { lat: -38.74, lng: 176.084, city: 'TAUPO', size: 0.04, type: 'city' }, // NZAP
    { lat: -37.03, lng: 174.973, city: 'ARDMORE', size: 0.04, type: 'city' }, // NZAR
    { lat: -43.489, lng: 172.532, city: 'CHRISTCHURCH INTERNATIONAL', size: 0.04, type: 'city' }, // NZCH
    { lat: -43.81, lng: -176.457, city: 'CHATHAM ISLANDS', size: 0.04, type: 'city' }, // NZCI
    { lat: -45.928, lng: 170.198, city: 'DUNEDIN', size: 0.04, type: 'city' }, // NZDN
    { lat: -38.663, lng: 177.978, city: 'GISBORNE', size: 0.04, type: 'city' }, // NZGS
    { lat: -43.907, lng: 170.128, city: 'GLENTANNER', size: 0.04, type: 'city' }, // NZGT
    { lat: -42.714, lng: 170.985, city: 'HOKITIKA', size: 0.04, type: 'city' }, // NZHK
    { lat: -37.866, lng: 175.332, city: 'HAMILTON', size: 0.04, type: 'city' }, // NZHN
    { lat: -39.647, lng: 176.767, city: 'HASTINGS', size: 0.04, type: 'city' }, // NZHS
    { lat: -35.263, lng: 173.912, city: 'KERIKERI', size: 0.04, type: 'city' }, // NZKK
    { lat: -35.07, lng: 173.285, city: 'KAITAIA', size: 0.04, type: 'city' }, // NZKT
    { lat: -45.212, lng: 169.373, city: 'ALEXANDRA', size: 0.04, type: 'city' }, // NZLX
    { lat: -43.765, lng: 170.133, city: 'MOUNT COOK', size: 0.04, type: 'city' }, // NZMC
    { lat: -45.533, lng: 167.65, city: 'MANAPOURI', size: 0.04, type: 'city' }, // NZMO
    { lat: -40.973, lng: 175.634, city: 'MASTERTON', size: 0.04, type: 'city' }, // NZMS
    { lat: -39.009, lng: 174.179, city: 'NEW PLYMOUTH', size: 0.04, type: 'city' }, // NZNP
    { lat: -41.298, lng: 173.221, city: 'NELSON', size: 0.04, type: 'city' }, // NZNS
    { lat: -46.412, lng: 168.313, city: 'INVERCARGILL', size: 0.04, type: 'city' }, // NZNV
    { lat: -40.206, lng: 175.388, city: 'OHAKEA', size: 0.04, type: 'city' }, // NZOH
    { lat: -44.97, lng: 171.082, city: 'OAMARU', size: 0.04, type: 'city' }, // NZOU
    { lat: -40.321, lng: 175.617, city: 'PALMERSTON NORTH', size: 0.04, type: 'city' }, // NZPM
    { lat: -40.905, lng: 174.989, city: 'PARAPARAUMU', size: 0.04, type: 'city' }, // NZPP
    { lat: -45.021, lng: 168.739, city: 'QUEENSTOWN', size: 0.04, type: 'city' }, // NZQN
    { lat: -38.109, lng: 176.317, city: 'ROTORUA', size: 0.04, type: 'city' }, // NZRO
    { lat: -39.446, lng: 175.658, city: 'WAIOURU', size: 0.04, type: 'city' }, // NZRU
    { lat: -90.0, lng: 0.0, city: 'SOUTH POLE STATION', size: 0.04, type: 'city' }, // NZSP
    { lat: -37.672, lng: 176.196, city: 'TAURANGA', size: 0.04, type: 'city' }, // NZTG
    { lat: -44.303, lng: 171.225, city: 'TIMARU', size: 0.04, type: 'city' }, // NZTU
    { lat: -44.235, lng: 170.118, city: 'PUKAKI', size: 0.04, type: 'city' }, // NZUK
    { lat: -41.518, lng: 173.87, city: 'WOODBOURNE', size: 0.04, type: 'city' }, // NZWB
    { lat: -77.883, lng: 166.65, city: 'MCMURDO STATION', size: 0.04, type: 'city' }, // NZWD
    { lat: -44.725, lng: 169.243, city: 'WANAKA', size: 0.04, type: 'city' }, // NZWF
    { lat: -43.551, lng: 172.553, city: 'WIGRAM', size: 0.04, type: 'city' }, // NZWG
    { lat: -37.921, lng: 176.914, city: 'WHAKATANE', size: 0.04, type: 'city' }, // NZWK
    { lat: -41.327, lng: 174.805, city: 'WELLINGTON INTERNATIONAL', size: 0.04, type: 'city' }, // NZWN
    { lat: -39.007, lng: 177.407, city: 'WAIROA', size: 0.04, type: 'city' }, // NZWO
    { lat: -36.788, lng: 174.63, city: 'WHENUAPAI', size: 0.04, type: 'city' }, // NZWP
    { lat: -35.768, lng: 174.365, city: 'WHANGAREI', size: 0.04, type: 'city' }, // NZWR
    { lat: -41.738, lng: 171.581, city: 'WESTPORT', size: 0.04, type: 'city' }, // NZWS
    { lat: -39.962, lng: 175.025, city: 'WANGANUI', size: 0.04, type: 'city' }, // NZWU
    { lat: 34.21, lng: 62.228, city: 'HERAT', size: 0.04, type: 'city' }, // OAHR
    { lat: 34.399, lng: 70.499, city: 'JALALABAD', size: 0.04, type: 'city' }, // OAJL
    { lat: 34.566, lng: 69.212, city: 'KABUL INTERNATIONAL', size: 0.04, type: 'city' }, // OAKB
    { lat: 31.506, lng: 65.848, city: 'KANDAHAR', size: 0.04, type: 'city' }, // OAKN
    { lat: 35.934, lng: 64.759, city: 'MAIMANA', size: 0.04, type: 'city' }, // OAMN
    { lat: 36.707, lng: 67.209, city: 'MAZAR I SHARIF', size: 0.04, type: 'city' }, // OAMS
    { lat: 33.391, lng: 62.261, city: 'SHINDAND', size: 0.04, type: 'city' }, // OASD
    { lat: 36.75, lng: 65.912, city: 'SHEBERGHAN', size: 0.04, type: 'city' }, // OASG
    { lat: 36.775, lng: 69.532, city: 'TALULQAN', size: 0.04, type: 'city' }, // OATQ
    { lat: 36.665, lng: 68.911, city: 'KUNDUZ', size: 0.04, type: 'city' }, // OAUZ
    { lat: 26.271, lng: 50.634, city: 'BAHRAIN INTERNATIONAL', size: 0.04, type: 'city' }, // OBBI
    { lat: 25.918, lng: 50.591, city: 'SHAIKH ISA', size: 0.04, type: 'city' }, // OBBS
    { lat: 18.24, lng: 42.656, city: 'ABHA', size: 0.04, type: 'city' }, // OEAB
    { lat: 25.284, lng: 49.486, city: 'AL AHSA', size: 0.04, type: 'city' }, // OEAH
    { lat: 20.296, lng: 41.634, city: 'AL BAHA', size: 0.04, type: 'city' }, // OEBA
    { lat: 19.984, lng: 42.623, city: 'BISHA', size: 0.04, type: 'city' }, // OEBH
    { lat: 25.911, lng: 49.591, city: 'ABQAIQ', size: 0.04, type: 'city' }, // OEBQ
    { lat: 26.471, lng: 49.798, city: 'KING FAHD INTERNATIONAL', size: 0.04, type: 'city' }, // OEDF
    { lat: 26.265, lng: 50.152, city: 'KING ABDULAZIZ AB', size: 0.04, type: 'city' }, // OEDR
    { lat: 16.901, lng: 42.586, city: 'JAZAN', size: 0.04, type: 'city' }, // OEGN
    { lat: 26.303, lng: 43.774, city: 'GASSIM', size: 0.04, type: 'city' }, // OEGS
    { lat: 31.411, lng: 37.279, city: 'GURIAT', size: 0.04, type: 'city' }, // OEGT
    { lat: 27.438, lng: 41.686, city: 'HAIL', size: 0.04, type: 'city' }, // OEHL
    { lat: 27.039, lng: 49.405, city: 'JUBAIL', size: 0.04, type: 'city' }, // OEJB
    { lat: 21.348, lng: 39.173, city: 'KING FAISAL NAVAL BASE', size: 0.04, type: 'city' }, // OEJF
    { lat: 21.679, lng: 39.156, city: 'KING ABDULAZIZ INTERNATIONAL', size: 0.04, type: 'city' }, // OEJN
    { lat: 27.901, lng: 45.528, city: 'KING KHALED MILITARY CITY', size: 0.04, type: 'city' }, // OEKK
    { lat: 24.553, lng: 39.705, city: 'PRINCE MOHAMMAD BIN ABDULAZIZ', size: 0.04, type: 'city' }, // OEMA
    { lat: 17.611, lng: 44.419, city: 'NEJRAN', size: 0.04, type: 'city' }, // OENG
    { lat: 28.335, lng: 46.125, city: 'QAISUMAH', size: 0.04, type: 'city' }, // OEPA
    { lat: 25.174, lng: 47.488, city: 'PUMP STATION 3', size: 0.04, type: 'city' }, // OEPC
    { lat: 24.71, lng: 44.964, city: 'PUMP STATION 6', size: 0.04, type: 'city' }, // OEPF
    { lat: 24.107, lng: 41.036, city: 'PUMP STATION 10', size: 0.04, type: 'city' }, // OEPJ
    { lat: 22.703, lng: 39.07, city: 'RABIGH', size: 0.04, type: 'city' }, // OERB
    { lat: 29.626, lng: 43.491, city: 'RAFHA', size: 0.04, type: 'city' }, // OERF
    { lat: 24.957, lng: 46.699, city: 'KING KHALED INTERNATIONAL', size: 0.04, type: 'city' }, // OERK
    { lat: 28.079, lng: 48.611, city: 'RAS MISHAB', size: 0.04, type: 'city' }, // OERM
    { lat: 30.907, lng: 41.138, city: 'ARAR', size: 0.04, type: 'city' }, // OERR
    { lat: 26.723, lng: 50.031, city: 'RAS TANURA', size: 0.04, type: 'city' }, // OERT
    { lat: 17.467, lng: 47.121, city: 'SHARURAH', size: 0.04, type: 'city' }, // OESH
    { lat: 29.785, lng: 40.1, city: 'AL JOUF', size: 0.04, type: 'city' }, // OESK
    { lat: 20.465, lng: 45.619, city: 'SULAYEL', size: 0.04, type: 'city' }, // OESL
    { lat: 28.365, lng: 36.619, city: 'TABUK', size: 0.04, type: 'city' }, // OETB
    { lat: 21.483, lng: 40.544, city: 'TAIF', size: 0.04, type: 'city' }, // OETF
    { lat: 25.214, lng: 46.641, city: 'THUMAMAH', size: 0.04, type: 'city' }, // OETH
    { lat: 27.869, lng: 48.768, city: 'RAS TANAJIB', size: 0.04, type: 'city' }, // OETN
    { lat: 31.692, lng: 38.731, city: 'TURAIF', size: 0.04, type: 'city' }, // OETR
    { lat: 20.504, lng: 45.199, city: 'WADI AL DAWASIR', size: 0.04, type: 'city' }, // OEWD
    { lat: 26.198, lng: 36.476, city: 'WEJH', size: 0.04, type: 'city' }, // OEWJ
    { lat: 24.144, lng: 38.063, city: 'YENBO', size: 0.04, type: 'city' }, // OEYN
    { lat: 30.365, lng: 48.233, city: 'ABADAN', size: 0.04, type: 'city' }, // OIAA
    { lat: 32.434, lng: 48.398, city: 'DEZFUL', size: 0.04, type: 'city' }, // OIAD
    { lat: 30.745, lng: 49.676, city: 'AGHAJARI', size: 0.04, type: 'city' }, // OIAG
    { lat: 30.337, lng: 50.828, city: 'GACHSARAN', size: 0.04, type: 'city' }, // OIAH
    { lat: 32.002, lng: 49.271, city: 'SHAHID ASYAEE', size: 0.04, type: 'city' }, // OIAI
    { lat: 30.835, lng: 49.535, city: 'OMIDIYEH', size: 0.04, type: 'city' }, // OIAJ
    { lat: 30.556, lng: 49.152, city: 'MAHSHAHR', size: 0.04, type: 'city' }, // OIAM
    { lat: 31.337, lng: 48.762, city: 'AHWAZ', size: 0.04, type: 'city' }, // OIAW
    { lat: 25.876, lng: 55.033, city: 'ABUMUSA ISLAND', size: 0.04, type: 'city' }, // OIBA
    { lat: 28.945, lng: 50.834, city: 'BUSHEHR', size: 0.04, type: 'city' }, // OIBB
    { lat: 27.212, lng: 54.318, city: 'BASTAK', size: 0.04, type: 'city' }, // OIBH
    { lat: 27.484, lng: 52.618, city: 'ASALOYEH', size: 0.04, type: 'city' }, // OIBI
    { lat: 26.527, lng: 53.982, city: 'KISH ISLAND', size: 0.04, type: 'city' }, // OIBK
    { lat: 26.532, lng: 54.822, city: 'BANDAR LENGEH', size: 0.04, type: 'city' }, // OIBL
    { lat: 29.259, lng: 50.324, city: 'KHARK ISLAND', size: 0.04, type: 'city' }, // OIBQ
    { lat: 25.909, lng: 54.539, city: 'SIRRI ISLAND', size: 0.04, type: 'city' }, // OIBS
    { lat: 26.81, lng: 53.356, city: 'LAVAN ISLAND', size: 0.04, type: 'city' }, // OIBV
    { lat: 34.346, lng: 47.156, city: 'SHAHID ASHRAFI ESFAHANI', size: 0.04, type: 'city' }, // OICC
    { lat: 32.934, lng: 47.483, city: 'ABDANAN', size: 0.04, type: 'city' }, // OICD
    { lat: 33.586, lng: 46.405, city: 'ILAM', size: 0.04, type: 'city' }, // OICI
    { lat: 33.436, lng: 48.286, city: 'KHORAM ABAD', size: 0.04, type: 'city' }, // OICK
    { lat: 35.247, lng: 47.007, city: 'SANANDAJ', size: 0.04, type: 'city' }, // OICS
    { lat: 32.929, lng: 51.561, city: 'HESA', size: 0.04, type: 'city' }, // OIFE
    { lat: 32.567, lng: 51.691, city: 'SHAHID VATAN POUR AIR BASE', size: 0.04, type: 'city' }, // OIFH
    { lat: 32.751, lng: 51.862, city: 'ESFAHAN SHAHID BEHESHTI INTERNATIONAL', size: 0.04, type: 'city' }, // OIFM
    { lat: 32.621, lng: 51.697, city: 'BADR AIR BASE', size: 0.04, type: 'city' }, // OIFP
    { lat: 37.325, lng: 49.606, city: 'RASHT', size: 0.04, type: 'city' }, // OIGG
    { lat: 34.868, lng: 48.552, city: 'HAMADAN', size: 0.04, type: 'city' }, // OIHH
    { lat: 34.14, lng: 49.848, city: 'ARAK', size: 0.04, type: 'city' }, // OIHR
    { lat: 35.703, lng: 51.475, city: 'DOSHAN TAPPEH', size: 0.04, type: 'city' }, // OIID
    { lat: 35.645, lng: 51.381, city: 'GHALE MORGHI', size: 0.04, type: 'city' }, // OIIG
    { lat: 35.689, lng: 51.313, city: 'MEHRABAD INTERNATIONAL', size: 0.04, type: 'city' }, // OIII
    { lat: 36.241, lng: 50.047, city: 'GHAZVIN', size: 0.04, type: 'city' }, // OIIK
    { lat: 35.591, lng: 53.495, city: 'SEMNAN', size: 0.04, type: 'city' }, // OIIS
    { lat: 27.218, lng: 56.378, city: 'BANDAR ABBASS INTERNATIONAL', size: 0.04, type: 'city' }, // OIKB
    { lat: 28.727, lng: 57.67, city: 'JIROFT', size: 0.04, type: 'city' }, // OIKJ
    { lat: 30.261, lng: 56.957, city: 'KERMAN', size: 0.04, type: 'city' }, // OIKK
    { lat: 29.084, lng: 58.45, city: 'BAM', size: 0.04, type: 'city' }, // OIKM
    { lat: 27.158, lng: 56.172, city: 'HAVADARYA', size: 0.04, type: 'city' }, // OIKP
    { lat: 26.755, lng: 55.902, city: 'DAYRESTAN', size: 0.04, type: 'city' }, // OIKQ
    { lat: 30.298, lng: 56.052, city: 'RAFSANJAN', size: 0.04, type: 'city' }, // OIKR
    { lat: 29.551, lng: 55.672, city: 'SIRJAN', size: 0.04, type: 'city' }, // OIKY
    { lat: 32.896, lng: 59.276, city: 'BIRJAND', size: 0.04, type: 'city' }, // OIMB
    { lat: 36.501, lng: 61.065, city: 'SARAKHS', size: 0.04, type: 'city' }, // OIMC
    { lat: 36.424, lng: 55.106, city: 'SHAHROUD', size: 0.04, type: 'city' }, // OIMJ
    { lat: 37.493, lng: 57.301, city: 'BOJNORD', size: 0.04, type: 'city' }, // OIMN
    { lat: 33.668, lng: 56.892, city: 'TABAS', size: 0.04, type: 'city' }, // OIMT
    { lat: 37.628, lng: 56.173, city: 'SOGA', size: 0.04, type: 'city' }, // OIMX
    { lat: 37.383, lng: 55.452, city: 'KALALEH', size: 0.04, type: 'city' }, // OINE
    { lat: 36.909, lng: 54.402, city: 'GORGAN', size: 0.04, type: 'city' }, // OING
    { lat: 34.169, lng: 51.318, city: 'MAHMUDABAD', size: 0.04, type: 'city' }, // OINM
    { lat: 36.663, lng: 51.465, city: 'NOSHAHR', size: 0.04, type: 'city' }, // OINN
    { lat: 36.91, lng: 50.679, city: 'RAMSAR', size: 0.04, type: 'city' }, // OINR
    { lat: 36.644, lng: 53.188, city: 'SARI DASHT E NAZ', size: 0.04, type: 'city' }, // OINZ
    { lat: 28.721, lng: 54.441, city: 'DARAB', size: 0.04, type: 'city' }, // OISD
    { lat: 28.892, lng: 53.723, city: 'FASA', size: 0.04, type: 'city' }, // OISF
    { lat: 28.586, lng: 53.579, city: 'JAHROM', size: 0.04, type: 'city' }, // OISJ
    { lat: 27.674, lng: 54.381, city: 'LAR', size: 0.04, type: 'city' }, // OISL
    { lat: 29.754, lng: 52.694, city: 'ZARGAN', size: 0.04, type: 'city' }, // OISO
    { lat: 27.371, lng: 53.189, city: 'LAMERD', size: 0.04, type: 'city' }, // OISR
    { lat: 29.539, lng: 52.589, city: 'SHIRAZ SHAHID DASTGHAIB INTERNATIONAL', size: 0.04, type: 'city' }, // OISS
    { lat: 38.326, lng: 48.424, city: 'ARDABIL', size: 0.04, type: 'city' }, // OITL
    { lat: 37.349, lng: 46.126, city: 'SAHAND', size: 0.04, type: 'city' }, // OITM
    { lat: 39.604, lng: 47.881, city: 'PARSABADE MOGHAN', size: 0.04, type: 'city' }, // OITP
    { lat: 38.133, lng: 46.235, city: 'TABRIZ INTERNATIONAL', size: 0.04, type: 'city' }, // OITT
    { lat: 36.774, lng: 48.36, city: 'ZANJAN', size: 0.04, type: 'city' }, // OITZ
    { lat: 31.905, lng: 54.276, city: 'YAZD SHAHID SADOOGHI', size: 0.04, type: 'city' }, // OIYY
    { lat: 31.097, lng: 61.544, city: 'ZABOL', size: 0.04, type: 'city' }, // OIZB
    { lat: 25.443, lng: 60.382, city: 'CHAH BAHAR', size: 0.04, type: 'city' }, // OIZC
    { lat: 29.476, lng: 60.906, city: 'ZAHEDAN INTERNATIONAL', size: 0.04, type: 'city' }, // OIZH
    { lat: 27.236, lng: 60.72, city: 'IRAN SHAHR', size: 0.04, type: 'city' }, // OIZI
    { lat: 25.653, lng: 57.799, city: 'JASK', size: 0.04, type: 'city' }, // OIZJ
    { lat: 31.722, lng: 35.993, city: 'QUEEN ALIA INTERNATIONAL', size: 0.04, type: 'city' }, // OJAI
    { lat: 31.972, lng: 35.991, city: 'MARKA INTERNATIONAL', size: 0.04, type: 'city' }, // OJAM
    { lat: 29.611, lng: 35.018, city: 'AQABA INTERNATIONAL', size: 0.04, type: 'city' }, // OJAQ
    { lat: 31.865, lng: 35.219, city: 'JERUSALEM', size: 0.04, type: 'city' }, // OJJR
    { lat: 32.356, lng: 36.259, city: 'KING HUSSEIN', size: 0.04, type: 'city' }, // OJMF
    { lat: 29.227, lng: 47.98, city: 'KUWAIT INTERNATIONAL', size: 0.04, type: 'city' }, // OKBK
    { lat: 33.813, lng: 35.489, city: 'BEIRUT INTERNATIONAL', size: 0.04, type: 'city' }, // OLBA
    { lat: 34.589, lng: 36.011, city: 'RENE MOUAWAD', size: 0.04, type: 'city' }, // OLKA
    { lat: 24.433, lng: 54.651, city: 'ABU DHABI INTERNATIONAL', size: 0.04, type: 'city' }, // OMAA
    { lat: 24.428, lng: 54.458, city: 'BATEEN', size: 0.04, type: 'city' }, // OMAD
    { lat: 24.074, lng: 52.463, city: 'AL HAMRA AUX', size: 0.04, type: 'city' }, // OMAH
    { lat: 24.187, lng: 52.614, city: 'JEBEL DHANA', size: 0.04, type: 'city' }, // OMAJ
    { lat: 24.262, lng: 55.609, city: 'AL AIN INTERNATIONAL', size: 0.04, type: 'city' }, // OMAL
    { lat: 24.248, lng: 54.547, city: 'AL DHAFRA', size: 0.04, type: 'city' }, // OMAM
    { lat: 24.78, lng: 52.56, city: 'ARZANAH', size: 0.04, type: 'city' }, // OMAR
    { lat: 25.146, lng: 52.874, city: 'DAS ISLAND', size: 0.04, type: 'city' }, // OMAS
    { lat: 24.861, lng: 53.078, city: 'ZIRKU', size: 0.04, type: 'city' }, // OMAZ
    { lat: 25.255, lng: 55.364, city: 'DUBAI INTERNATIONAL', size: 0.04, type: 'city' }, // OMDB
    { lat: 25.112, lng: 56.324, city: 'FUJAIRAH INTERNATIONAL', size: 0.04, type: 'city' }, // OMFJ
    { lat: 25.613, lng: 55.939, city: 'RAS AL KHAIMAH INTERNATIONAL', size: 0.04, type: 'city' }, // OMRK
    { lat: 25.328, lng: 55.517, city: 'SHARJAH INTERNATIONAL', size: 0.04, type: 'city' }, // OMSJ
    { lat: 26.171, lng: 56.241, city: 'KHASAB', size: 0.04, type: 'city' }, // OOKB
    { lat: 20.675, lng: 58.89, city: 'MASIRAH', size: 0.04, type: 'city' }, // OOMA
    { lat: 23.593, lng: 58.284, city: 'SEEB INTERNATIONAL', size: 0.04, type: 'city' }, // OOMS
    { lat: 17.039, lng: 54.091, city: 'SALALAH', size: 0.04, type: 'city' }, // OOSA
    { lat: 23.067, lng: 57.65, city: 'OMAN MET OFFICE', size: 0.04, type: 'city' }, // OOSQ
    { lat: 17.666, lng: 54.024, city: 'THUMRAIT', size: 0.04, type: 'city' }, // OOTH
    { lat: 32.972, lng: 70.525, city: 'BANNU', size: 0.04, type: 'city' }, // OPBN
    { lat: 29.347, lng: 71.711, city: 'BAHAWALPUR', size: 0.04, type: 'city' }, // OPBW
    { lat: 35.886, lng: 71.801, city: 'CHITRAL', size: 0.04, type: 'city' }, // OPCH
    { lat: 28.875, lng: 64.404, city: 'DALBANDIN', size: 0.04, type: 'city' }, // OPDB
    { lat: 29.961, lng: 70.486, city: 'DERA GHAZI KHAN', size: 0.04, type: 'city' }, // OPDG
    { lat: 31.909, lng: 70.896, city: 'DERA ISMAIL KHAN', size: 0.04, type: 'city' }, // OPDI
    { lat: 31.365, lng: 72.995, city: 'FAISALABAD INTERNATIONAL', size: 0.04, type: 'city' }, // OPFA
    { lat: 25.233, lng: 62.329, city: 'GWADAR', size: 0.04, type: 'city' }, // OPGD
    { lat: 35.919, lng: 74.334, city: 'GILGIT', size: 0.04, type: 'city' }, // OPGT
    { lat: 28.284, lng: 68.449, city: 'SHAHBAZ AB', size: 0.04, type: 'city' }, // OPJA
    { lat: 25.068, lng: 61.805, city: 'JIWANI', size: 0.04, type: 'city' }, // OPJI
    { lat: 24.906, lng: 67.161, city: 'JINNAH INTERNATIONAL', size: 0.04, type: 'city' }, // OPKC
    { lat: 25.318, lng: 68.366, city: 'HYDERABAD', size: 0.04, type: 'city' }, // OPKD
    { lat: 27.793, lng: 66.643, city: 'KHUZDAR', size: 0.04, type: 'city' }, // OPKH
    { lat: 28.594, lng: 65.425, city: 'KHARAN', size: 0.04, type: 'city' }, // OPKN
    { lat: 31.521, lng: 74.403, city: 'ALLAMA IQBAL INTERNATIONAL', size: 0.04, type: 'city' }, // OPLA
    { lat: 31.495, lng: 74.346, city: 'WALTON', size: 0.04, type: 'city' }, // OPLH
    { lat: 33.05, lng: 73.638, city: 'MANGLA', size: 0.04, type: 'city' }, // OPMA
    { lat: 34.338, lng: 73.508, city: 'MUZAFFARABAD', size: 0.04, type: 'city' }, // OPMF
    { lat: 32.563, lng: 71.571, city: 'MIANWALI', size: 0.04, type: 'city' }, // OPMI
    { lat: 27.335, lng: 68.143, city: 'MOENJODARO', size: 0.04, type: 'city' }, // OPMJ
    { lat: 25.683, lng: 69.073, city: 'MIRPUR KHAS NORTH', size: 0.04, type: 'city' }, // OPMK
    { lat: 33.013, lng: 70.064, city: 'MIRAM SHAH', size: 0.04, type: 'city' }, // OPMN
    { lat: 24.893, lng: 66.939, city: 'MASROOR', size: 0.04, type: 'city' }, // OPMR
    { lat: 30.203, lng: 71.419, city: 'MULTAN INTERNATIONAL', size: 0.04, type: 'city' }, // OPMT
    { lat: 26.219, lng: 68.39, city: 'NAWABSHAH', size: 0.04, type: 'city' }, // OPNH
    { lat: 29.538, lng: 66.022, city: 'NUSHKI', size: 0.04, type: 'city' }, // OPNK
    { lat: 30.741, lng: 73.357, city: 'OKARA', size: 0.04, type: 'city' }, // OPOK
    { lat: 25.273, lng: 64.588, city: 'ORMARA', size: 0.04, type: 'city' }, // OPOR
    { lat: 33.902, lng: 70.071, city: 'PARACHINAR', size: 0.04, type: 'city' }, // OPPC
    { lat: 26.954, lng: 64.132, city: 'PANJGUR', size: 0.04, type: 'city' }, // OPPG
    { lat: 25.284, lng: 63.333, city: 'PASNI', size: 0.04, type: 'city' }, // OPPI
    { lat: 33.994, lng: 71.514, city: 'PESHAWAR', size: 0.04, type: 'city' }, // OPPS
    { lat: 33.561, lng: 73.032, city: 'QASIM', size: 0.04, type: 'city' }, // OPQS
    { lat: 30.251, lng: 66.938, city: 'QUETTA', size: 0.04, type: 'city' }, // OPQT
    { lat: 28.385, lng: 70.28, city: 'SHAIKH ZAYED', size: 0.04, type: 'city' }, // OPRK
    { lat: 33.616, lng: 73.099, city: 'CHAKLALA', size: 0.04, type: 'city' }, // OPRN
    { lat: 30.758, lng: 72.282, city: 'RAFIQUI', size: 0.04, type: 'city' }, // OPRQ
    { lat: 34.081, lng: 71.972, city: 'RISALPUR', size: 0.04, type: 'city' }, // OPRS
    { lat: 33.849, lng: 73.798, city: 'RAWALAKOT', size: 0.04, type: 'city' }, // OPRT
    { lat: 35.335, lng: 75.536, city: 'SKARDU', size: 0.04, type: 'city' }, // OPSD
    { lat: 27.722, lng: 68.792, city: 'SUKKUR', size: 0.04, type: 'city' }, // OPSK
    { lat: 32.049, lng: 72.665, city: 'SARGODHA', size: 0.04, type: 'city' }, // OPSR
    { lat: 34.813, lng: 72.352, city: 'SAIDU SHARIF', size: 0.04, type: 'city' }, // OPSS
    { lat: 28.645, lng: 69.177, city: 'SUI', size: 0.04, type: 'city' }, // OPSU
    { lat: 31.889, lng: 72.309, city: 'SAHIWAL', size: 0.04, type: 'city' }, // OPSW
    { lat: 33.986, lng: 72.611, city: 'TARBELA DAM', size: 0.04, type: 'city' }, // OPTA
    { lat: 24.841, lng: 68.838, city: 'TALHAR', size: 0.04, type: 'city' }, // OPTH
    { lat: 25.986, lng: 63.03, city: 'TURBAT INTERNATIONAL', size: 0.04, type: 'city' }, // OPTU
    { lat: 32.305, lng: 69.569, city: 'WANA', size: 0.04, type: 'city' }, // OPWN
    { lat: 31.358, lng: 69.463, city: 'ZHOB', size: 0.04, type: 'city' }, // OPZB
    { lat: 33.262, lng: 44.234, city: 'SADDAM INTERNATIONAL', size: 0.04, type: 'city' }, // ORBS
    { lat: 30.549, lng: 47.662, city: 'BASRAH INTERNATIONAL', size: 0.04, type: 'city' }, // ORMM
    { lat: 36.181, lng: 37.224, city: 'ALEPPO INTERNATIONAL', size: 0.04, type: 'city' }, // OSAP
    { lat: 33.411, lng: 36.516, city: 'DAMASCUS INTERNATIONAL', size: 0.04, type: 'city' }, // OSDI
    { lat: 35.285, lng: 40.176, city: 'DEIR ZZOR', size: 0.04, type: 'city' }, // OSDZ
    { lat: 37.024, lng: 41.194, city: 'KAMISHLY', size: 0.04, type: 'city' }, // OSKL
    { lat: 35.401, lng: 35.949, city: 'BASSEL AL ASSAD INTERNATIONAL', size: 0.04, type: 'city' }, // OSLK
    { lat: 34.557, lng: 38.317, city: 'PALMYRA', size: 0.04, type: 'city' }, // OSPR
    { lat: 25.261, lng: 51.565, city: 'DOHA INTERNATIONAL', size: 0.04, type: 'city' }, // OTBD
    { lat: 61.595, lng: -149.089, city: 'PALMER MUNI', size: 0.04, type: 'city' }, // PAAQ
    { lat: 70.134, lng: -143.577, city: 'BARTER ISLAND LRRS', size: 0.04, type: 'city' }, // PABA
    { lat: 60.78, lng: -161.838, city: 'BETHEL', size: 0.04, type: 'city' }, // PABE
    { lat: 63.994, lng: -145.721, city: 'ALLEN AAF', size: 0.04, type: 'city' }, // PABI
    { lat: 59.362, lng: -155.257, city: 'BIG MOUNTAIN AFS', size: 0.04, type: 'city' }, // PABM
    { lat: 71.285, lng: -156.766, city: 'WILEY POST WILL ROGERS MEM', size: 0.04, type: 'city' }, // PABR
    { lat: 66.915, lng: -151.528, city: 'BETTLES', size: 0.04, type: 'city' }, // PABT
    { lat: 55.206, lng: -162.724, city: 'COLD BAY', size: 0.04, type: 'city' }, // PACD
    { lat: 64.301, lng: -149.12, city: 'CLEAR', size: 0.04, type: 'city' }, // PACL
    { lat: 60.492, lng: -145.477, city: 'MERLE K MUDHOLE SMITH', size: 0.04, type: 'city' }, // PACV
    { lat: 61.78, lng: -166.039, city: 'CAPE ROMANZOF LRRS', size: 0.04, type: 'city' }, // PACZ
    { lat: 51.878, lng: -176.646, city: 'ADAK', size: 0.04, type: 'city' }, // PADK
    { lat: 59.045, lng: -158.503, city: 'DILLINGHAM', size: 0.04, type: 'city' }, // PADL
    { lat: 57.75, lng: -152.494, city: 'KODIAK', size: 0.04, type: 'city' }, // PADQ
    { lat: 53.9, lng: -166.543, city: 'UNALASKA', size: 0.04, type: 'city' }, // PADU
    { lat: 61.251, lng: -149.806, city: 'ELMENDORF AFB', size: 0.04, type: 'city' }, // PAED
    { lat: 58.647, lng: -162.061, city: 'CAPE NEWENHAM LRRS', size: 0.04, type: 'city' }, // PAEH
    { lat: 64.666, lng: -147.101, city: 'EIELSON AFB', size: 0.04, type: 'city' }, // PAEI
    { lat: 60.573, lng: -151.245, city: 'KENAI MUNI', size: 0.04, type: 'city' }, // PAEN
    { lat: 64.815, lng: -147.856, city: 'FAIRBANKS INTERNATIONAL', size: 0.04, type: 'city' }, // PAFA
    { lat: 64.837, lng: -147.614, city: 'WAINWRIGHT AAF', size: 0.04, type: 'city' }, // PAFB
    { lat: 61.266, lng: -149.653, city: 'BRYANT AHP', size: 0.04, type: 'city' }, // PAFR
    { lat: 64.736, lng: -156.937, city: 'EDWARD G PITKA SR', size: 0.04, type: 'city' }, // PAGA
    { lat: 62.155, lng: -145.456, city: 'GULKANA', size: 0.04, type: 'city' }, // PAGK
    { lat: 59.46, lng: -135.316, city: 'SKAGWAY', size: 0.04, type: 'city' }, // PAGY
    { lat: 59.646, lng: -151.476, city: 'HOMER', size: 0.04, type: 'city' }, // PAHO
    { lat: 59.754, lng: -154.911, city: 'ILIAMNA', size: 0.04, type: 'city' }, // PAIL
    { lat: 65.993, lng: -153.704, city: 'INDIAN MOUNTAIN LRRS', size: 0.04, type: 'city' }, // PAIM
    { lat: 58.355, lng: -134.576, city: 'JUNEAU INTERNATIONAL', size: 0.04, type: 'city' }, // PAJN
    { lat: 58.677, lng: -156.649, city: 'KING SALMON', size: 0.04, type: 'city' }, // PAKN
    { lat: 55.356, lng: -131.714, city: 'KETCHIKAN INTERNATIONAL', size: 0.04, type: 'city' }, // PAKT
    { lat: 68.875, lng: -166.11, city: 'CAPE LISBURNE LRRS', size: 0.04, type: 'city' }, // PALU
    { lat: 62.953, lng: -155.606, city: 'MC GRATH', size: 0.04, type: 'city' }, // PAMC
    { lat: 59.45, lng: -146.309, city: 'MIDDLETON ISLAND', size: 0.04, type: 'city' }, // PAMD
    { lat: 61.214, lng: -149.846, city: 'MERRILL FLD', size: 0.04, type: 'city' }, // PAMR
    { lat: 61.174, lng: -149.996, city: 'TED STEVENS ANCHORAGE INTERNATIONAL', size: 0.04, type: 'city' }, // PANC
    { lat: 55.042, lng: -131.572, city: 'ANNETTE ISLAND', size: 0.04, type: 'city' }, // PANT
    { lat: 64.512, lng: -165.445, city: 'NOME', size: 0.04, type: 'city' }, // PAOM
    { lat: 62.961, lng: -141.929, city: 'NORTHWAY', size: 0.04, type: 'city' }, // PAOR
    { lat: 66.884, lng: -162.598, city: 'RALPH WIEN MEM', size: 0.04, type: 'city' }, // PAOT
    { lat: 56.578, lng: -169.661, city: 'ST GEORGE', size: 0.04, type: 'city' }, // PAPB
    { lat: 59.011, lng: -161.819, city: 'PLATINUM', size: 0.04, type: 'city' }, // PAPM
    { lat: 70.195, lng: -148.465, city: 'DEADHORSE', size: 0.04, type: 'city' }, // PASC
    { lat: 57.047, lng: -135.361, city: 'SITKA ROCKY GUTIERREZ', size: 0.04, type: 'city' }, // PASI
    { lat: 57.167, lng: -170.22, city: 'ST PAUL ISLAND', size: 0.04, type: 'city' }, // PASN
    { lat: 61.097, lng: -155.574, city: 'SPARREVOHN LRRS', size: 0.04, type: 'city' }, // PASV
    { lat: 52.712, lng: 174.114, city: 'EARECKSON AS', size: 0.04, type: 'city' }, // PASY
    { lat: 65.174, lng: -152.109, city: 'RALPH M CALHOUN', size: 0.04, type: 'city' }, // PATA
    { lat: 65.563, lng: -167.922, city: 'TIN CITY LRRS', size: 0.04, type: 'city' }, // PATC
    { lat: 62.32, lng: -150.094, city: 'TALKEETNA', size: 0.04, type: 'city' }, // PATK
    { lat: 62.894, lng: -155.976, city: 'TATALINA LRRS', size: 0.04, type: 'city' }, // PATL
    { lat: 63.888, lng: -160.799, city: 'UNALAKLEET', size: 0.04, type: 'city' }, // PAUN
    { lat: 61.134, lng: -146.248, city: 'VALDEZ PIONEER FIELD', size: 0.04, type: 'city' }, // PAVD
    { lat: 70.613, lng: -159.86, city: 'WAINWRIGHT AS', size: 0.04, type: 'city' }, // PAWT
    { lat: 59.503, lng: -139.66, city: 'YAKUTAT', size: 0.04, type: 'city' }, // PAYA
    { lat: -2.767, lng: 0.0, city: 'CANTON ISLAND AIRPORT', size: 0.04, type: 'city' }, // PCIS
    { lat: 66.571, lng: -145.25, city: 'FORT YUKON', size: 0.04, type: 'city' }, // PFYU
    { lat: 14.174, lng: 145.243, city: 'ROTA INTERNATIONAL', size: 0.04, type: 'city' }, // PGRO
    { lat: 15.119, lng: 145.729, city: 'SAIPAN INTERNATIONAL', size: 0.04, type: 'city' }, // PGSN
    { lat: 13.5, lng: 144.833, city: 'GUAM JOINT TYPHOON CENTER', size: 0.04, type: 'city' }, // PGTW
    { lat: 13.584, lng: 144.93, city: 'ANDERSEN AFB', size: 0.04, type: 'city' }, // PGUA
    { lat: 13.484, lng: 144.797, city: 'GUAM INTERNATIONAL', size: 0.04, type: 'city' }, // PGUM
    { lat: 14.998, lng: 145.619, city: 'WEST TINIAN', size: 0.04, type: 'city' }, // PGWT
    { lat: 22.022, lng: -159.787, city: 'BARKING SANDS PMRF', size: 0.04, type: 'city' }, // PHBK
    { lat: 21.579, lng: -158.21, city: 'DILLINGHAM', size: 0.04, type: 'city' }, // PHDH
    { lat: 21.483, lng: -158.039, city: 'WHEELER AAF', size: 0.04, type: 'city' }, // PHHI
    { lat: 20.796, lng: -156.014, city: 'HANA', size: 0.04, type: 'city' }, // PHHN
    { lat: 20.963, lng: -156.674, city: 'KAPALUA', size: 0.04, type: 'city' }, // PHJH
    { lat: 19.739, lng: -156.046, city: 'KONA INTERNATIONAL AT KEAHOLE', size: 0.04, type: 'city' }, // PHKO
    { lat: 21.976, lng: -159.339, city: 'LIHUE', size: 0.04, type: 'city' }, // PHLI
    { lat: 21.153, lng: -157.096, city: 'MOLOKAI', size: 0.04, type: 'city' }, // PHMK
    { lat: 20.001, lng: -155.668, city: 'WAIMEA KOHALA', size: 0.04, type: 'city' }, // PHMU
    { lat: 21.449, lng: -157.768, city: 'KANEOHE BAY MCAF', size: 0.04, type: 'city' }, // PHNG
    { lat: 21.316, lng: -157.927, city: 'HONOLULU INTERNATIONAL', size: 0.04, type: 'city' }, // PHNL
    { lat: 20.786, lng: -156.951, city: 'LANAI', size: 0.04, type: 'city' }, // PHNY
    { lat: 20.899, lng: -156.431, city: 'KAHULUI', size: 0.04, type: 'city' }, // PHOG
    { lat: 19.76, lng: -155.554, city: 'BRADSHAW AAF', size: 0.04, type: 'city' }, // PHSF
    { lat: 19.72, lng: -155.049, city: 'HILO INTERNATIONAL', size: 0.04, type: 'city' }, // PHTO
    { lat: 20.265, lng: -155.86, city: 'UPOLU', size: 0.04, type: 'city' }, // PHUP
    { lat: 16.729, lng: -169.534, city: 'JOHNSTON ATOLL', size: 0.04, type: 'city' }, // PJON
    { lat: 11.341, lng: 162.328, city: 'ENEWETAK AUX AF', size: 0.04, type: 'city' }, // PKMA
    { lat: 7.065, lng: 171.272, city: 'MARSHALL ISLANDS INTERNATIONAL', size: 0.04, type: 'city' }, // PKMJ
    { lat: 9.397, lng: 167.471, city: 'DYESS AAF', size: 0.04, type: 'city' }, // PKRO
    { lat: 8.72, lng: 167.731, city: 'BUCHOLZ AAF', size: 0.04, type: 'city' }, // PKWA
    { lat: 1.986, lng: -157.35, city: 'CHRISTMAS ISLAND', size: 0.04, type: 'city' }, // PLCH
    { lat: 28.201, lng: -177.381, city: 'MIDWAY ATOLL', size: 0.04, type: 'city' }, // PMDY
    { lat: 70.499, lng: -149.879, city: 'OLIKTOK LRRS', size: 0.04, type: 'city' }, // POLI
    { lat: 69.733, lng: -163.005, city: 'POINT LAY LRRS', size: 0.04, type: 'city' }, // PPIZ
    { lat: 7.462, lng: 151.843, city: 'CHUUK INTERNATIONAL', size: 0.04, type: 'city' }, // PTKK
    { lat: 6.985, lng: 158.209, city: 'POHNPEI INTERNATIONAL', size: 0.04, type: 'city' }, // PTPN
    { lat: 7.367, lng: 134.544, city: 'BABELTHUAP', size: 0.04, type: 'city' }, // PTRO
    { lat: 5.357, lng: 162.958, city: 'KOSRAE', size: 0.04, type: 'city' }, // PTSA
    { lat: 9.499, lng: 138.082, city: 'YAP INTERNATIONAL', size: 0.04, type: 'city' }, // PTYA
    { lat: 24.432, lng: 118.359, city: 'SHANG YI', size: 0.04, type: 'city' }, // RCBS
    { lat: 22.672, lng: 120.462, city: 'PINGTUNG SOUTH', size: 0.04, type: 'city' }, // RCDC
    { lat: 24.855, lng: 121.237, city: 'LUNGTANG', size: 0.04, type: 'city' }, // RCDI
    { lat: 22.757, lng: 121.093, city: 'FENGNIN', size: 0.04, type: 'city' }, // RCFN
    { lat: 22.674, lng: 121.458, city: 'GREEN ISLAND', size: 0.04, type: 'city' }, // RCGI
    { lat: 25.056, lng: 121.243, city: 'TAOYUAN', size: 0.04, type: 'city' }, // RCGM
    { lat: 22.575, lng: 120.351, city: 'KAOHSIUNG INTERNATIONAL', size: 0.04, type: 'city' }, // RCKH
    { lat: 23.462, lng: 120.393, city: 'CHIAYI', size: 0.04, type: 'city' }, // RCKU
    { lat: 24.186, lng: 120.654, city: 'TAICHUNG', size: 0.04, type: 'city' }, // RCLG
    { lat: 22.029, lng: 121.527, city: 'LANYU', size: 0.04, type: 'city' }, // RCLY
    { lat: 24.264, lng: 120.621, city: 'CHING CHUAN KANG AB', size: 0.04, type: 'city' }, // RCMQ
    { lat: 26.224, lng: 120.002, city: 'MATSU', size: 0.04, type: 'city' }, // RCMT
    { lat: 22.95, lng: 120.206, city: 'TAINAN', size: 0.04, type: 'city' }, // RCNN
    { lat: 24.818, lng: 120.939, city: 'HSINCHU', size: 0.04, type: 'city' }, // RCPO
    { lat: 23.569, lng: 119.628, city: 'MAKUNG', size: 0.04, type: 'city' }, // RCQC
    { lat: 22.793, lng: 121.182, city: 'CHIHHONG', size: 0.04, type: 'city' }, // RCQS
    { lat: 22.705, lng: 120.281, city: 'TSOYING', size: 0.04, type: 'city' }, // RCRA
    { lat: 22.7, lng: 120.482, city: 'PINGTUNG NORTH', size: 0.04, type: 'city' }, // RCSQ
    { lat: 25.069, lng: 121.552, city: 'SUNGSHAN', size: 0.04, type: 'city' }, // RCSS
    { lat: 25.08, lng: 121.232, city: 'CHIANG KAI SHEK INTERNATIONAL', size: 0.04, type: 'city' }, // RCTP
    { lat: 23.371, lng: 119.494, city: 'WANG AN', size: 0.04, type: 'city' }, // RCWA
    { lat: 24.023, lng: 121.618, city: 'HUALIEN', size: 0.04, type: 'city' }, // RCYU
    { lat: 35.765, lng: 140.386, city: 'NEW TOKYO INTERNATIONAL', size: 0.04, type: 'city' }, // RJAA
    { lat: 36.167, lng: 137.923, city: 'MATSUMOTO', size: 0.04, type: 'city' }, // RJAF
    { lat: 36.181, lng: 140.415, city: 'HYAKURI', size: 0.04, type: 'city' }, // RJAH
    { lat: 24.289, lng: 153.979, city: 'MINAMI TORISHIMA', size: 0.04, type: 'city' }, // RJAM
    { lat: 24.784, lng: 141.322, city: 'IWO JIMA', size: 0.04, type: 'city' }, // RJAW
    { lat: 33.662, lng: 135.364, city: 'NANKI SHIRAHAMA', size: 0.04, type: 'city' }, // RJBD
    { lat: 34.591, lng: 133.933, city: 'KOHNAN', size: 0.04, type: 'city' }, // RJBK
    { lat: 42.733, lng: 143.217, city: 'OBIHIRO', size: 0.04, type: 'city' }, // RJCB
    { lat: 42.775, lng: 141.692, city: 'CHITOSE INTERNATIONAL AIRPORT', size: 0.04, type: 'city' }, // RJCC
    { lat: 41.77, lng: 140.822, city: 'HAKODATE', size: 0.04, type: 'city' }, // RJCH
    { lat: 42.794, lng: 141.666, city: 'CHITOSE', size: 0.04, type: 'city' }, // RJCJ
    { lat: 43.881, lng: 144.164, city: 'MEMANBETSU', size: 0.04, type: 'city' }, // RJCM
    { lat: 43.577, lng: 144.96, city: 'NAKASHIBETSU', size: 0.04, type: 'city' }, // RJCN
    { lat: 43.116, lng: 141.38, city: 'SAPPORO', size: 0.04, type: 'city' }, // RJCO
    { lat: 42.89, lng: 143.158, city: 'TOKACHI', size: 0.04, type: 'city' }, // RJCT
    { lat: 45.404, lng: 141.801, city: 'WAKKANAI', size: 0.04, type: 'city' }, // RJCW
    { lat: 33.749, lng: 129.785, city: 'IKI', size: 0.04, type: 'city' }, // RJDB
    { lat: 33.93, lng: 131.279, city: 'YAMAGUCHI UBE', size: 0.04, type: 'city' }, // RJDC
    { lat: 34.285, lng: 129.33, city: 'TSUSHIMA', size: 0.04, type: 'city' }, // RJDT
    { lat: 44.304, lng: 143.404, city: 'MONBETSU', size: 0.04, type: 'city' }, // RJEB
    { lat: 43.671, lng: 142.447, city: 'ASAHIKAWA', size: 0.04, type: 'city' }, // RJEC
    { lat: 45.242, lng: 141.186, city: 'RISHIRI', size: 0.04, type: 'city' }, // RJER
    { lat: 33.883, lng: 130.653, city: 'ASHIYA', size: 0.04, type: 'city' }, // RJFA
    { lat: 30.386, lng: 130.659, city: 'YAKUSHIMA', size: 0.04, type: 'city' }, // RJFC
    { lat: 32.666, lng: 128.833, city: 'FUKUE', size: 0.04, type: 'city' }, // RJFE
    { lat: 33.586, lng: 130.45, city: 'FUKUOKA', size: 0.04, type: 'city' }, // RJFF
    { lat: 30.547, lng: 130.95, city: 'TANEGASHIMA', size: 0.04, type: 'city' }, // RJFG
    { lat: 31.803, lng: 130.719, city: 'KAGOSHIMA', size: 0.04, type: 'city' }, // RJFK
    { lat: 31.877, lng: 131.448, city: 'MIYAZAKI', size: 0.04, type: 'city' }, // RJFM
    { lat: 32.084, lng: 131.452, city: 'NYUTABARU', size: 0.04, type: 'city' }, // RJFN
    { lat: 33.479, lng: 131.737, city: 'OITA', size: 0.04, type: 'city' }, // RJFO
    { lat: 33.836, lng: 130.947, city: 'KITAKYUSHU', size: 0.04, type: 'city' }, // RJFR
    { lat: 32.837, lng: 130.855, city: 'KUMAMOTO', size: 0.04, type: 'city' }, // RJFT
    { lat: 32.922, lng: 129.923, city: 'NAGASAKI', size: 0.04, type: 'city' }, // RJFU
    { lat: 31.367, lng: 130.845, city: 'KANOYA', size: 0.04, type: 'city' }, // RJFY
    { lat: 33.685, lng: 131.041, city: 'TSUIKI', size: 0.04, type: 'city' }, // RJFZ
    { lat: 28.431, lng: 129.712, city: 'AMAMI', size: 0.04, type: 'city' }, // RJKA
    { lat: 27.425, lng: 128.701, city: 'OKIERABU', size: 0.04, type: 'city' }, // RJKB
    { lat: 27.836, lng: 128.881, city: 'TOKUNOSHIMA', size: 0.04, type: 'city' }, // RJKN
    { lat: 36.143, lng: 136.224, city: 'FUKUI', size: 0.04, type: 'city' }, // RJNF
    { lat: 35.394, lng: 136.869, city: 'GIFU', size: 0.04, type: 'city' }, // RJNG
    { lat: 34.75, lng: 137.703, city: 'HAMAMATSU', size: 0.04, type: 'city' }, // RJNH
    { lat: 36.394, lng: 136.408, city: 'KOMATSU', size: 0.04, type: 'city' }, // RJNK
    { lat: 35.255, lng: 136.924, city: 'NAGOYA', size: 0.04, type: 'city' }, // RJNN
    { lat: 36.181, lng: 133.325, city: 'OKI', size: 0.04, type: 'city' }, // RJNO
    { lat: 36.648, lng: 137.187, city: 'TOYAMA', size: 0.04, type: 'city' }, // RJNT
    { lat: 34.813, lng: 138.298, city: 'SHIZUHAMA', size: 0.04, type: 'city' }, // RJNY
    { lat: 34.435, lng: 132.922, city: 'HIROSHIMA', size: 0.04, type: 'city' }, // RJOA
    { lat: 34.757, lng: 133.856, city: 'OKAYAMA', size: 0.04, type: 'city' }, // RJOB
    { lat: 35.414, lng: 132.89, city: 'IZUMO', size: 0.04, type: 'city' }, // RJOC
    { lat: 34.034, lng: 131.549, city: 'HOFU', size: 0.04, type: 'city' }, // RJOF
    { lat: 35.492, lng: 133.236, city: 'MIHO', size: 0.04, type: 'city' }, // RJOH
    { lat: 34.144, lng: 132.236, city: 'IWAKUNI MCAS', size: 0.04, type: 'city' }, // RJOI
    { lat: 33.544, lng: 133.671, city: 'KOCHI', size: 0.04, type: 'city' }, // RJOK
    { lat: 33.827, lng: 132.7, city: 'MATSUYAMA', size: 0.04, type: 'city' }, // RJOM
    { lat: 34.785, lng: 135.438, city: 'OSAKA INTERNATIONAL', size: 0.04, type: 'city' }, // RJOO
    { lat: 35.53, lng: 134.166, city: 'TOTTORI', size: 0.04, type: 'city' }, // RJOR
    { lat: 34.133, lng: 134.606, city: 'TOKUSHIMA', size: 0.04, type: 'city' }, // RJOS
    { lat: 34.214, lng: 134.016, city: 'TAKAMATSU', size: 0.04, type: 'city' }, // RJOT
    { lat: 34.596, lng: 135.603, city: 'YAO', size: 0.04, type: 'city' }, // RJOY
    { lat: 34.045, lng: 131.052, city: 'OZUKI', size: 0.04, type: 'city' }, // RJOZ
    { lat: 40.734, lng: 140.691, city: 'AOMORI', size: 0.04, type: 'city' }, // RJSA
    { lat: 38.412, lng: 140.371, city: 'YAMAGATA', size: 0.04, type: 'city' }, // RJSC
    { lat: 40.556, lng: 141.466, city: 'HACHINOHE', size: 0.04, type: 'city' }, // RJSH
    { lat: 39.431, lng: 141.136, city: 'HANAMAKI', size: 0.04, type: 'city' }, // RJSI
    { lat: 39.616, lng: 140.219, city: 'AKITA', size: 0.04, type: 'city' }, // RJSK
    { lat: 40.703, lng: 141.368, city: 'MISAWA AB', size: 0.04, type: 'city' }, // RJSM
    { lat: 38.139, lng: 140.917, city: 'SENDAI', size: 0.04, type: 'city' }, // RJSS
    { lat: 38.405, lng: 141.219, city: 'MATSUSHIMA', size: 0.04, type: 'city' }, // RJST
    { lat: 38.812, lng: 139.787, city: 'SHONAI', size: 0.04, type: 'city' }, // RJSY
    { lat: 35.454, lng: 139.45, city: 'ATSUGI NAF', size: 0.04, type: 'city' }, // RJTA
    { lat: 34.987, lng: 139.829, city: 'TATEYAMA', size: 0.04, type: 'city' }, // RJTE
    { lat: 35.672, lng: 139.528, city: 'CHOFU', size: 0.04, type: 'city' }, // RJTF
    { lat: 33.115, lng: 139.786, city: 'HACHIJOJIMA', size: 0.04, type: 'city' }, // RJTH
    { lat: 35.841, lng: 139.41, city: 'IRUMA', size: 0.04, type: 'city' }, // RJTJ
    { lat: 35.398, lng: 139.91, city: 'KISARAZU', size: 0.04, type: 'city' }, // RJTK
    { lat: 35.799, lng: 140.011, city: 'SHIMOFUSA', size: 0.04, type: 'city' }, // RJTL
    { lat: 34.784, lng: 139.361, city: 'OSHIMA', size: 0.04, type: 'city' }, // RJTO
    { lat: 34.072, lng: 139.56, city: 'MIYAKEJIMA', size: 0.04, type: 'city' }, // RJTQ
    { lat: 35.514, lng: 139.394, city: 'KASTNER AAF', size: 0.04, type: 'city' }, // RJTR
    { lat: 35.552, lng: 139.779, city: 'TOKYO INTERNATIONAL', size: 0.04, type: 'city' }, // RJTT
    { lat: 35.748, lng: 139.348, city: 'YOKOTA AB', size: 0.04, type: 'city' }, // RJTY
    { lat: 35.126, lng: 126.81, city: 'GWANGJU', size: 0.04, type: 'city' }, // RKJJ
    { lat: 35.904, lng: 126.616, city: 'KUNSAN AB', size: 0.04, type: 'city' }, // RKJK
    { lat: 34.759, lng: 126.38, city: 'MOKPO', size: 0.04, type: 'city' }, // RKJM
    { lat: 35.878, lng: 127.119, city: 'JEONJU', size: 0.04, type: 'city' }, // RKJU
    { lat: 34.84, lng: 127.615, city: 'YEOSU', size: 0.04, type: 'city' }, // RKJY
    { lat: 37.884, lng: 127.718, city: 'A 306', size: 0.04, type: 'city' }, // RKNC
    { lat: 38.148, lng: 128.601, city: 'SOKCHO', size: 0.04, type: 'city' }, // RKND
    { lat: 37.753, lng: 128.944, city: 'GANGNEUNG', size: 0.04, type: 'city' }, // RKNN
    { lat: 37.438, lng: 127.96, city: 'WONJU', size: 0.04, type: 'city' }, // RKNW
    { lat: 38.061, lng: 128.669, city: 'YANGYANG INTERNATIONAL', size: 0.04, type: 'city' }, // RKNY
    { lat: 33.511, lng: 126.493, city: 'JEJU INTERNATIONAL', size: 0.04, type: 'city' }, // RKPC
    { lat: 35.141, lng: 128.696, city: 'JINHAE', size: 0.04, type: 'city' }, // RKPE
    { lat: 35.179, lng: 128.938, city: 'GIMHAE INTERNATIONAL', size: 0.04, type: 'city' }, // RKPK
    { lat: 35.171, lng: 129.129, city: 'PUSAN', size: 0.04, type: 'city' }, // RKPP
    { lat: 35.088, lng: 128.07, city: 'SACHEON AB', size: 0.04, type: 'city' }, // RKPS
    { lat: 35.593, lng: 129.352, city: 'ULSAN', size: 0.04, type: 'city' }, // RKPU
    { lat: 36.961, lng: 127.033, city: 'A 511', size: 0.04, type: 'city' }, // RKSG
    { lat: 37.446, lng: 127.114, city: 'SEOUL AB', size: 0.04, type: 'city' }, // RKSM
    { lat: 37.091, lng: 127.029, city: 'OSAN AB', size: 0.04, type: 'city' }, // RKSO
    { lat: 37.558, lng: 126.791, city: 'GIMPO', size: 0.04, type: 'city' }, // RKSS
    { lat: 37.239, lng: 127.007, city: 'SUWON', size: 0.04, type: 'city' }, // RKSW
    { lat: 35.988, lng: 129.42, city: 'POHANG', size: 0.04, type: 'city' }, // RKTH
    { lat: 35.856, lng: 129.211, city: 'R 806', size: 0.04, type: 'city' }, // RKTJ
    { lat: 35.894, lng: 128.659, city: 'DAEGU AB', size: 0.04, type: 'city' }, // RKTN
    { lat: 36.716, lng: 127.499, city: 'CHEONGJU INTERNATIONAL', size: 0.04, type: 'city' }, // RKTU
    { lat: 36.632, lng: 128.355, city: 'YECHEON', size: 0.04, type: 'city' }, // RKTY
    { lat: 26.196, lng: 127.646, city: 'NAHA', size: 0.04, type: 'city' }, // ROAH
    { lat: 26.729, lng: 127.762, city: 'IE SHIMA AUX AB', size: 0.04, type: 'city' }, // RODE
    { lat: 26.356, lng: 127.767, city: 'KADENA AB', size: 0.04, type: 'city' }, // RODN
    { lat: 24.344, lng: 124.187, city: 'ISHIGAKI', size: 0.04, type: 'city' }, // ROIG
    { lat: 26.363, lng: 126.714, city: 'KUMEJIMA', size: 0.04, type: 'city' }, // ROKJ
    { lat: 25.846, lng: 131.263, city: 'MINAMI DAITO', size: 0.04, type: 'city' }, // ROMD
    { lat: 24.783, lng: 125.295, city: 'MIYAKO', size: 0.04, type: 'city' }, // ROMY
    { lat: 25.948, lng: 131.321, city: 'KITADAITO', size: 0.04, type: 'city' }, // RORK
    { lat: 24.827, lng: 125.145, city: 'SHIMOJISHIMA', size: 0.04, type: 'city' }, // RORS
    { lat: 27.044, lng: 128.401, city: 'YORON', size: 0.04, type: 'city' }, // RORY
    { lat: 26.274, lng: 127.756, city: 'FUTENMA MCAS', size: 0.04, type: 'city' }, // ROTM
    { lat: 24.467, lng: 122.978, city: 'YONAGUNI', size: 0.04, type: 'city' }, // ROYN
    { lat: 14.509, lng: 121.019, city: 'NINOY AQUINO INTERNATIONAL', size: 0.04, type: 'city' }, // RPLL
    { lat: 6.106, lng: 125.236, city: 'GENERAL SANTOS', size: 0.04, type: 'city' }, // RPMB
    { lat: 7.165, lng: 124.21, city: 'COTABATO', size: 0.04, type: 'city' }, // RPMC
    { lat: 8.414, lng: 124.611, city: 'CAGAYAN DE ORO', size: 0.04, type: 'city' }, // RPML
    { lat: 7.617, lng: 124.059, city: 'MALABANG', size: 0.04, type: 'city' }, // RPMM
    { lat: 7.828, lng: 123.46, city: 'PAGADIAN', size: 0.04, type: 'city' }, // RPMP
    { lat: 6.058, lng: 125.096, city: 'TAMBLER', size: 0.04, type: 'city' }, // RPMR
    { lat: 9.758, lng: 125.481, city: 'SURIGAO', size: 0.04, type: 'city' }, // RPMS
    { lat: 6.922, lng: 122.059, city: 'ZAMBOANGA INTERNATIONAL', size: 0.04, type: 'city' }, // RPMZ
    { lat: 16.375, lng: 120.619, city: 'BAGUIO', size: 0.04, type: 'city' }, // RPUB
    { lat: 14.129, lng: 122.98, city: 'DAET', size: 0.04, type: 'city' }, // RPUD
    { lat: 14.986, lng: 120.493, city: 'BASA AB', size: 0.04, type: 'city' }, // RPUF
    { lat: 16.035, lng: 120.241, city: 'LINGAYEN', size: 0.04, type: 'city' }, // RPUG
    { lat: 12.361, lng: 121.046, city: 'SAN JOSE', size: 0.04, type: 'city' }, // RPUH
    { lat: 15.326, lng: 119.969, city: 'IBA', size: 0.04, type: 'city' }, // RPUI
    { lat: 13.955, lng: 121.125, city: 'FERNANDO AB', size: 0.04, type: 'city' }, // RPUL
    { lat: 13.208, lng: 120.605, city: 'MAMBURAO', size: 0.04, type: 'city' }, // RPUM
    { lat: 13.585, lng: 123.271, city: 'NAGA', size: 0.04, type: 'city' }, // RPUN
    { lat: 20.452, lng: 121.98, city: 'BASCO', size: 0.04, type: 'city' }, // RPUO
    { lat: 14.293, lng: 122.646, city: 'LARAP', size: 0.04, type: 'city' }, // RPUP
    { lat: 17.554, lng: 120.357, city: 'VIGAN', size: 0.04, type: 'city' }, // RPUQ
    { lat: 16.596, lng: 120.303, city: 'SAN FERNANDO', size: 0.04, type: 'city' }, // RPUS
    { lat: 17.638, lng: 121.731, city: 'TUGUEGARAO', size: 0.04, type: 'city' }, // RPUT
    { lat: 13.578, lng: 124.206, city: 'VIRAC', size: 0.04, type: 'city' }, // RPUV
    { lat: 13.361, lng: 121.825, city: 'MARINDUQUE', size: 0.04, type: 'city' }, // RPUW
    { lat: 16.93, lng: 121.753, city: 'CAUAYAN', size: 0.04, type: 'city' }, // RPUY
    { lat: 16.619, lng: 121.252, city: 'BAGABAG', size: 0.04, type: 'city' }, // RPUZ
    { lat: 11.227, lng: 125.028, city: 'DANIEL Z ROMUALDEZ', size: 0.04, type: 'city' }, // RPVA
    { lat: 10.643, lng: 122.929, city: 'BACOLOD', size: 0.04, type: 'city' }, // RPVB
    { lat: 12.072, lng: 124.545, city: 'CALBAYOG', size: 0.04, type: 'city' }, // RPVC
    { lat: 9.334, lng: 123.302, city: 'DUMAGUETE', size: 0.04, type: 'city' }, // RPVD
    { lat: 12.502, lng: 124.636, city: 'CATARMAN', size: 0.04, type: 'city' }, // RPVF
    { lat: 11.036, lng: 125.743, city: 'GUIUAN', size: 0.04, type: 'city' }, // RPVG
    { lat: 10.713, lng: 122.545, city: 'ILOILO', size: 0.04, type: 'city' }, // RPVI
    { lat: 11.681, lng: 122.378, city: 'KALIBO', size: 0.04, type: 'city' }, // RPVK
    { lat: 10.308, lng: 123.979, city: 'MACTAN INTERNATIONAL', size: 0.04, type: 'city' }, // RPVM
    { lat: 11.056, lng: 124.566, city: 'ORMOC', size: 0.04, type: 'city' }, // RPVO
    { lat: 9.742, lng: 118.759, city: 'PUERTO PRINCESA', size: 0.04, type: 'city' }, // RPVP
    { lat: 11.598, lng: 122.753, city: 'ROXAS', size: 0.04, type: 'city' }, // RPVR
    { lat: 10.766, lng: 121.932, city: 'ANTIQUE', size: 0.04, type: 'city' }, // RPVS
    { lat: -31.297, lng: -57.996, city: 'COMODORO PIERRESTEGUI', size: 0.04, type: 'city' }, // SAAC
    { lat: -33.006, lng: -58.613, city: 'GUALEGUAYCHU', size: 0.04, type: 'city' }, // SAAG
    { lat: -35.348, lng: -57.294, city: 'PUNTA INDIO', size: 0.04, type: 'city' }, // SAAI
    { lat: -34.546, lng: -60.931, city: 'JUNIN', size: 0.04, type: 'city' }, // SAAJ
    { lat: -31.795, lng: -60.48, city: 'GENERAL URQUIZA', size: 0.04, type: 'city' }, // SAAP
    { lat: -32.903, lng: -60.784, city: 'ROSARIO', size: 0.04, type: 'city' }, // SAAR
    { lat: -31.712, lng: -60.812, city: 'SAUCE VIEJO', size: 0.04, type: 'city' }, // SAAV
    { lat: -34.559, lng: -58.416, city: 'AEROPARQUE JORGE NEWBERY', size: 0.04, type: 'city' }, // SABE
    { lat: -31.007, lng: -64.532, city: 'LA CUMBRE', size: 0.04, type: 'city' }, // SACC
    { lat: -31.324, lng: -64.208, city: 'AMBROSIO L V TARAVELLA', size: 0.04, type: 'city' }, // SACO
    { lat: -30.345, lng: -66.294, city: 'CHAMICAL', size: 0.04, type: 'city' }, // SACT
    { lat: -34.501, lng: -58.604, city: 'DON TORCUATO', size: 0.04, type: 'city' }, // SADD
    { lat: -34.453, lng: -58.589, city: 'SAN FERNANDO', size: 0.04, type: 'city' }, // SADF
    { lat: -34.561, lng: -58.789, city: 'MARIANO MORENO', size: 0.04, type: 'city' }, // SADJ
    { lat: -34.972, lng: -57.894, city: 'LA PLATA', size: 0.04, type: 'city' }, // SADL
    { lat: -34.676, lng: -58.642, city: 'MORON', size: 0.04, type: 'city' }, // SADM
    { lat: -34.61, lng: -58.613, city: 'EL PALOMAR', size: 0.04, type: 'city' }, // SADP
    { lat: -34.731, lng: -58.599, city: 'AEROCLUB ARGENTINO', size: 0.04, type: 'city' }, // SADS
    { lat: -37.444, lng: -70.222, city: 'CHOS MALAL', size: 0.04, type: 'city' }, // SAHC
    { lat: -39.001, lng: -67.62, city: 'GENERAL ROCA', size: 0.04, type: 'city' }, // SAHR
    { lat: -32.832, lng: -68.793, city: 'EL PLUMERILLO', size: 0.04, type: 'city' }, // SAME
    { lat: -35.484, lng: -69.582, city: 'MALARGUE', size: 0.04, type: 'city' }, // SAMM
    { lat: -32.866, lng: -68.872, city: 'MENDOZA AEROPARQUE', size: 0.04, type: 'city' }, // SAMQ
    { lat: -34.588, lng: -68.403, city: 'SAN RAFAEL', size: 0.04, type: 'city' }, // SAMR
    { lat: -28.596, lng: -65.752, city: 'CATAMARCA', size: 0.04, type: 'city' }, // SANC
    { lat: -27.766, lng: -64.31, city: 'SANTIAGO DEL ESTERO', size: 0.04, type: 'city' }, // SANE
    { lat: -28.038, lng: -67.58, city: 'TINOGASTA', size: 0.04, type: 'city' }, // SANI
    { lat: -29.381, lng: -66.796, city: 'LA RIOJA', size: 0.04, type: 'city' }, // SANL
    { lat: -29.224, lng: -67.439, city: 'CHILECITO', size: 0.04, type: 'city' }, // SANO
    { lat: -26.841, lng: -65.105, city: 'TENIENTE BENJAMIN MATIENZO', size: 0.04, type: 'city' }, // SANT
    { lat: -31.571, lng: -68.418, city: 'SAN JUAN', size: 0.04, type: 'city' }, // SANU
    { lat: -33.086, lng: -64.261, city: 'RIO CUARTO AREA DE MATERIAL', size: 0.04, type: 'city' }, // SAOC
    { lat: -31.941, lng: -65.142, city: 'VILLA DOLORES', size: 0.04, type: 'city' }, // SAOD
    { lat: -34.135, lng: -63.362, city: 'LABOULAYE', size: 0.04, type: 'city' }, // SAOL
    { lat: -32.684, lng: -62.158, city: 'MARCOS JUAREZ', size: 0.04, type: 'city' }, // SAOM
    { lat: -33.73, lng: -65.387, city: 'VILLA REYNOLDS', size: 0.04, type: 'city' }, // SAOR
    { lat: -33.273, lng: -66.356, city: 'SAN LUIS', size: 0.04, type: 'city' }, // SAOU
    { lat: -27.445, lng: -58.762, city: 'CORRIENTES', size: 0.04, type: 'city' }, // SARC
    { lat: -27.45, lng: -59.056, city: 'RESISTENCIA', size: 0.04, type: 'city' }, // SARE
    { lat: -26.212, lng: -58.228, city: 'FORMOSA', size: 0.04, type: 'city' }, // SARF
    { lat: -25.738, lng: -54.473, city: 'CATARATAS DEL IGUAZU', size: 0.04, type: 'city' }, // SARI
    { lat: -29.689, lng: -57.152, city: 'PASO DE LOS LIBRES', size: 0.04, type: 'city' }, // SARL
    { lat: -30.272, lng: -57.64, city: 'MONTE CASEROS', size: 0.04, type: 'city' }, // SARM
    { lat: -27.386, lng: -55.971, city: 'POSADAS', size: 0.04, type: 'city' }, // SARP
    { lat: -26.756, lng: -60.493, city: 'TERMAL', size: 0.04, type: 'city' }, // SARS
    { lat: -24.856, lng: -65.486, city: 'SALTA', size: 0.04, type: 'city' }, // SASA
    { lat: -24.393, lng: -65.098, city: 'JUJUY', size: 0.04, type: 'city' }, // SASJ
    { lat: -23.153, lng: -64.329, city: 'ORAN', size: 0.04, type: 'city' }, // SASO
    { lat: -22.162, lng: -65.57, city: 'LA QUIACA', size: 0.04, type: 'city' }, // SASQ
    { lat: -22.62, lng: -63.794, city: 'GENERAL ENRIQUE MOSCONI TARTAGAL', size: 0.04, type: 'city' }, // SAST
    { lat: -29.106, lng: -59.219, city: 'GOYA', size: 0.04, type: 'city' }, // SATG
    { lat: -24.721, lng: -60.549, city: 'ALFEREZ ARMANDO RODRIGUEZ', size: 0.04, type: 'city' }, // SATK
    { lat: -29.223, lng: -58.088, city: 'MERCEDES', size: 0.04, type: 'city' }, // SATM
    { lat: -27.518, lng: -55.124, city: 'OBERA', size: 0.04, type: 'city' }, // SATO
    { lat: -29.21, lng: -59.691, city: 'RECONQUISTA', size: 0.04, type: 'city' }, // SATR
    { lat: -29.771, lng: -57.979, city: 'CURUZU CUATIA', size: 0.04, type: 'city' }, // SATU
    { lat: -41.943, lng: -71.532, city: 'EL BOLSON', size: 0.04, type: 'city' }, // SAVB
    { lat: -45.785, lng: -67.466, city: 'COMODORO RIVADAVIA', size: 0.04, type: 'city' }, // SAVC
    { lat: -42.031, lng: -71.17, city: 'EL MAITEN', size: 0.04, type: 'city' }, // SAVD
    { lat: -42.908, lng: -71.139, city: 'ESQUEL', size: 0.04, type: 'city' }, // SAVE
    { lat: -46.538, lng: -68.966, city: 'LAS HERAS', size: 0.04, type: 'city' }, // SAVH
    { lat: -43.21, lng: -65.27, city: 'ALMIRANTE ZAR', size: 0.04, type: 'city' }, // SAVT
    { lat: -40.869, lng: -63.0, city: 'GOBERNADOR CASTELLO', size: 0.04, type: 'city' }, // SAVV
    { lat: -42.759, lng: -65.102, city: 'EL TEHUELCHE', size: 0.04, type: 'city' }, // SAVY
    { lat: -50.335, lng: -72.248, city: 'LAGO ARGENTINO', size: 0.04, type: 'city' }, // SAWA
    { lat: -64.238, lng: -56.631, city: 'BASE MARAMBIO', size: 0.04, type: 'city' }, // SAWB
    { lat: -47.735, lng: -65.904, city: 'PUERTO DESEADO', size: 0.04, type: 'city' }, // SAWD
    { lat: -53.777, lng: -67.749, city: 'RIO GRANDE', size: 0.04, type: 'city' }, // SAWE
    { lat: -51.609, lng: -69.313, city: 'RIO GALLEGOS', size: 0.04, type: 'city' }, // SAWG
    { lat: -54.843, lng: -68.296, city: 'USHUAIA MALVINAS ARGENTINAS', size: 0.04, type: 'city' }, // SAWH
    { lat: -49.307, lng: -67.802, city: 'SAN JULIAN', size: 0.04, type: 'city' }, // SAWJ
    { lat: -44.048, lng: -70.459, city: 'JOSE DE SAN MARTIN', size: 0.04, type: 'city' }, // SAWS
    { lat: -51.606, lng: -72.217, city: 'EL TURBIO', size: 0.04, type: 'city' }, // SAWT
    { lat: -50.016, lng: -68.579, city: 'SANTA CRUZ', size: 0.04, type: 'city' }, // SAWU
    { lat: -38.725, lng: -62.169, city: 'COMANDANTE ESPORA', size: 0.04, type: 'city' }, // SAZB
    { lat: -37.446, lng: -61.889, city: 'CORONEL SUAREZ', size: 0.04, type: 'city' }, // SAZC
    { lat: -36.32, lng: -57.722, city: 'DOLORES', size: 0.04, type: 'city' }, // SAZD
    { lat: -36.891, lng: -60.216, city: 'OLAVARRIA', size: 0.04, type: 'city' }, // SAZF
    { lat: -35.696, lng: -63.758, city: 'GENERAL PICO', size: 0.04, type: 'city' }, // SAZG
    { lat: -38.387, lng: -60.329, city: 'TRES ARROYOS', size: 0.04, type: 'city' }, // SAZH
    { lat: -36.187, lng: -61.076, city: 'BOLIVAR', size: 0.04, type: 'city' }, // SAZI
    { lat: -36.542, lng: -56.722, city: 'SANTA TERESITA', size: 0.04, type: 'city' }, // SAZL
    { lat: -37.934, lng: -57.573, city: 'MAR DEL PLATA', size: 0.04, type: 'city' }, // SAZM
    { lat: -38.949, lng: -68.156, city: 'PRESIDENTE PERON', size: 0.04, type: 'city' }, // SAZN
    { lat: -38.489, lng: -58.816, city: 'NECOCHEA', size: 0.04, type: 'city' }, // SAZO
    { lat: -35.846, lng: -61.858, city: 'COMODORO P ZANNI', size: 0.04, type: 'city' }, // SAZP
    { lat: -36.588, lng: -64.275, city: 'SANTA ROSA', size: 0.04, type: 'city' }, // SAZR
    { lat: -41.151, lng: -71.157, city: 'SAN CARLOS DE BARILOCHE', size: 0.04, type: 'city' }, // SAZS
    { lat: -37.237, lng: -59.228, city: 'TANDIL', size: 0.04, type: 'city' }, // SAZT
    { lat: -37.235, lng: -57.029, city: 'VILLA GESELL', size: 0.04, type: 'city' }, // SAZV
    { lat: -38.939, lng: -69.264, city: 'CUTRALCO', size: 0.04, type: 'city' }, // SAZW
    { lat: -40.075, lng: -71.137, city: 'AVIADOR C CAMPOS', size: 0.04, type: 'city' }, // SAZY
    { lat: -8.348, lng: -49.301, city: 'UNKNOWN', size: 0.04, type: 'city' }, // SBAA
    { lat: -22.875, lng: -43.384, city: 'CAMPO DELIO JARDIM DE MATTOS', size: 0.04, type: 'city' }, // SBAF
    { lat: 2.077, lng: -50.862, city: 'AMAPA', size: 0.04, type: 'city' }, // SBAM
    { lat: -21.812, lng: -48.133, city: 'ARARAQUARA', size: 0.04, type: 'city' }, // SBAQ
    { lat: -10.984, lng: -37.07, city: 'SANTA MARIA', size: 0.04, type: 'city' }, // SBAR
    { lat: -22.638, lng: -50.456, city: 'ASSIS', size: 0.04, type: 'city' }, // SBAS
    { lat: -9.866, lng: -56.106, city: 'ALTA FLORESTA', size: 0.04, type: 'city' }, // SBAT
    { lat: -21.141, lng: -50.425, city: 'ARACATUBA', size: 0.04, type: 'city' }, // SBAU
    { lat: -22.526, lng: -52.972, city: 'USINA PORTO PRIMAVERA', size: 0.04, type: 'city' }, // SBAV
    { lat: -1.379, lng: -48.476, city: 'VAL DE CAES', size: 0.04, type: 'city' }, // SBBE
    { lat: -31.39, lng: -54.112, city: 'COMANDANTE GUSTAVO KRAEMER', size: 0.04, type: 'city' }, // SBBG
    { lat: -19.852, lng: -43.95, city: 'PAMPULHA', size: 0.04, type: 'city' }, // SBBH
    { lat: -25.405, lng: -49.232, city: 'BACACHERI', size: 0.04, type: 'city' }, // SBBI
    { lat: -21.267, lng: -43.761, city: 'MAJOR BRIGADEIRO DOORGAL BORGES', size: 0.04, type: 'city' }, // SBBQ
    { lat: -15.862, lng: -47.913, city: 'PRESIDENTE JUSCELINO KUBITSCHEK', size: 0.04, type: 'city' }, // SBBR
    { lat: -22.345, lng: -49.054, city: 'BAURU', size: 0.04, type: 'city' }, // SBBU
    { lat: 2.846, lng: -60.69, city: 'BOA VISTA', size: 0.04, type: 'city' }, // SBBV
    { lat: -15.861, lng: -52.389, city: 'BARRA DO GARCAS', size: 0.04, type: 'city' }, // SBBW
    { lat: -25.0, lng: -53.501, city: 'CASCAVEL', size: 0.04, type: 'city' }, // SBCA
    { lat: -9.334, lng: -54.965, city: 'CACHIMBO', size: 0.04, type: 'city' }, // SBCC
    { lat: -19.634, lng: -43.969, city: 'TANCREDO NEVES', size: 0.04, type: 'city' }, // SBCF
    { lat: -20.469, lng: -54.672, city: 'CAMPO GRANDE', size: 0.04, type: 'city' }, // SBCG
    { lat: -27.134, lng: -52.656, city: 'CHAPECO', size: 0.04, type: 'city' }, // SBCH
    { lat: -7.32, lng: -47.459, city: 'CAROLINA', size: 0.04, type: 'city' }, // SBCI
    { lat: -28.726, lng: -49.425, city: 'FORQUILHINHA', size: 0.04, type: 'city' }, // SBCM
    { lat: -29.946, lng: -51.144, city: 'CANOAS', size: 0.04, type: 'city' }, // SBCO
    { lat: -21.698, lng: -41.302, city: 'BARTOLOMEU LISANDRO', size: 0.04, type: 'city' }, // SBCP
    { lat: -19.012, lng: -57.673, city: 'CORUMBA INTERNATIONAL', size: 0.04, type: 'city' }, // SBCR
    { lat: -25.528, lng: -49.176, city: 'AFONSO PENA', size: 0.04, type: 'city' }, // SBCT
    { lat: -17.652, lng: -39.253, city: 'CARAVELAS', size: 0.04, type: 'city' }, // SBCV
    { lat: -29.197, lng: -51.188, city: 'CAMPO DOS BUGRES', size: 0.04, type: 'city' }, // SBCX
    { lat: -15.653, lng: -56.117, city: 'MARECHAL RONDON', size: 0.04, type: 'city' }, // SBCY
    { lat: -7.6, lng: -72.769, city: 'CRUZEIRO DO SUL', size: 0.04, type: 'city' }, // SBCZ
    { lat: -22.175, lng: -51.424, city: 'PRESIDENTE PRUDENTE', size: 0.04, type: 'city' }, // SBDN
    { lat: -3.039, lng: -60.05, city: 'EDUARDO GOMES INTERNATIONAL', size: 0.04, type: 'city' }, // SBEG
    { lat: -6.233, lng: -57.777, city: 'JACAREACANGA', size: 0.04, type: 'city' }, // SBEK
    { lat: -22.813, lng: -42.093, city: 'SAO PEDRO DA ALDEIA', size: 0.04, type: 'city' }, // SBES
    { lat: -20.592, lng: -47.383, city: 'FRANCA', size: 0.04, type: 'city' }, // SBFC
    { lat: -25.596, lng: -54.487, city: 'CATARATAS INTERNATIONAL', size: 0.04, type: 'city' }, // SBFI
    { lat: -27.672, lng: -48.548, city: 'HERCILIO LUZ', size: 0.04, type: 'city' }, // SBFL
    { lat: -3.855, lng: -32.423, city: 'FERNANDO DE NORONHA', size: 0.04, type: 'city' }, // SBFN
    { lat: -20.278, lng: -49.187, city: 'FRONTEIRA', size: 0.04, type: 'city' }, // SBFT
    { lat: -20.703, lng: -46.335, city: 'FURNAS', size: 0.04, type: 'city' }, // SBFU
    { lat: -3.776, lng: -38.532, city: 'PINTO MARTINS INTERNATIONAL', size: 0.04, type: 'city' }, // SBFZ
    { lat: -22.809, lng: -43.244, city: 'GALEAO ANTONIO CARLOS JOBIM', size: 0.04, type: 'city' }, // SBGL
    { lat: -10.786, lng: -65.285, city: 'GUAJARA MIRIM', size: 0.04, type: 'city' }, // SBGM
    { lat: -16.631, lng: -49.222, city: 'SANTA GENOVEVA', size: 0.04, type: 'city' }, // SBGO
    { lat: -23.432, lng: -46.469, city: 'GUARULHOS', size: 0.04, type: 'city' }, // SBGR
    { lat: -25.184, lng: -50.144, city: 'PONTA GROSSA', size: 0.04, type: 'city' }, // SBGS
    { lat: -22.791, lng: -45.205, city: 'GUARATINGUETA', size: 0.04, type: 'city' }, // SBGW
    { lat: -3.254, lng: -52.254, city: 'ALTAMIRA', size: 0.04, type: 'city' }, // SBHT
    { lat: -3.127, lng: -58.481, city: 'ITACOATIARA', size: 0.04, type: 'city' }, // SBIC
    { lat: -4.242, lng: -56.001, city: 'ITAITUBA', size: 0.04, type: 'city' }, // SBIH
    { lat: -14.816, lng: -39.033, city: 'ILHEUS', size: 0.04, type: 'city' }, // SBIL
    { lat: -19.471, lng: -42.488, city: 'USIMINAS', size: 0.04, type: 'city' }, // SBIP
    { lat: -18.444, lng: -49.213, city: 'HIDROELETRICA', size: 0.04, type: 'city' }, // SBIT
    { lat: -5.531, lng: -47.46, city: 'IMPERATRIZ', size: 0.04, type: 'city' }, // SBIZ
    { lat: -1.414, lng: -48.461, city: 'JULIO CESAR', size: 0.04, type: 'city' }, // SBJC
    { lat: -21.791, lng: -43.387, city: 'FRANCISCO DE ASSIS', size: 0.04, type: 'city' }, // SBJF
    { lat: -7.27, lng: -35.896, city: 'INTL. PRES. CASTRO PINTO', size: 0.04, type: 'city' }, // SBJP
    { lat: -26.225, lng: -48.797, city: 'JOINVILLE', size: 0.04, type: 'city' }, // SBJV
    { lat: -23.008, lng: -47.134, city: 'VIRACOPOS', size: 0.04, type: 'city' }, // SBKP
    { lat: -27.782, lng: -50.281, city: 'LAGES', size: 0.04, type: 'city' }, // SBLJ
    { lat: -21.664, lng: -49.73, city: 'LINS', size: 0.04, type: 'city' }, // SBLN
    { lat: -23.334, lng: -51.13, city: 'LONDRINA', size: 0.04, type: 'city' }, // SBLO
    { lat: -13.262, lng: -43.408, city: 'BOM JESUS DA LAPA', size: 0.04, type: 'city' }, // SBLP
    { lat: -19.661, lng: -43.896, city: 'LAGOA SANTA', size: 0.04, type: 'city' }, // SBLS
    { lat: -5.368, lng: -49.138, city: 'MARABA', size: 0.04, type: 'city' }, // SBMA
    { lat: -0.89, lng: -52.602, city: 'MONTE DOURADO', size: 0.04, type: 'city' }, // SBMD
    { lat: -23.44, lng: -51.907, city: 'MARINGA', size: 0.04, type: 'city' }, // SBMG
    { lat: -16.707, lng: -43.819, city: 'MONTES CLAROS', size: 0.04, type: 'city' }, // SBMK
    { lat: -22.197, lng: -49.926, city: 'MARILIA', size: 0.04, type: 'city' }, // SBML
    { lat: -3.146, lng: -59.986, city: 'PONTA PELADA', size: 0.04, type: 'city' }, // SBMN
    { lat: -9.51, lng: -35.793, city: 'ZUMBI DOS PALMARES', size: 0.04, type: 'city' }, // SBMO
    { lat: 0.051, lng: -51.072, city: 'MACAPA', size: 0.04, type: 'city' }, // SBMQ
    { lat: -5.202, lng: -37.364, city: 'DIX SEPT ROSADO', size: 0.04, type: 'city' }, // SBMS
    { lat: -23.509, lng: -46.638, city: 'MARTE', size: 0.04, type: 'city' }, // SBMT
    { lat: -5.811, lng: -61.279, city: 'MANICORE', size: 0.04, type: 'city' }, // SBMY
    { lat: -26.88, lng: -48.651, city: 'NAVEGANTES ITAJAI', size: 0.04, type: 'city' }, // SBNF
    { lat: -28.282, lng: -54.169, city: 'SANTO ANGELO', size: 0.04, type: 'city' }, // SBNM
    { lat: -5.911, lng: -35.248, city: 'AUGUSTO SEVERO', size: 0.04, type: 'city' }, // SBNT
    { lat: 3.855, lng: -51.797, city: 'OIAPOQUE', size: 0.04, type: 'city' }, // SBOI
    { lat: -29.994, lng: -51.171, city: 'SALGADO FILHO', size: 0.04, type: 'city' }, // SBPA
    { lat: -2.894, lng: -41.732, city: 'PARNAIBA', size: 0.04, type: 'city' }, // SBPB
    { lat: -21.843, lng: -46.568, city: 'POCOS DE CALDAS', size: 0.04, type: 'city' }, // SBPC
    { lat: -28.244, lng: -52.326, city: 'LAURO KURTZ', size: 0.04, type: 'city' }, // SBPF
    { lat: -31.718, lng: -52.328, city: 'PELOTAS', size: 0.04, type: 'city' }, // SBPK
    { lat: -9.364, lng: -40.564, city: 'PETROLINA', size: 0.04, type: 'city' }, // SBPL
    { lat: -10.719, lng: -48.4, city: 'PORTO NACIONAL', size: 0.04, type: 'city' }, // SBPN
    { lat: -22.549, lng: -55.703, city: 'PONTA PORA', size: 0.04, type: 'city' }, // SBPP
    { lat: -8.709, lng: -63.902, city: 'GOVERNADOR JORGE TEIXEIRA DE OLIVEIRA', size: 0.04, type: 'city' }, // SBPV
    { lat: -14.862, lng: -40.863, city: 'VITORIA DA CONQUISTA', size: 0.04, type: 'city' }, // SBQV
    { lat: -9.869, lng: -67.894, city: 'PRESIDENTE MEDICI', size: 0.04, type: 'city' }, // SBRB
    { lat: -8.126, lng: -34.923, city: 'GUARARAPES', size: 0.04, type: 'city' }, // SBRF
    { lat: -32.083, lng: -52.166, city: 'RIO GRANDE', size: 0.04, type: 'city' }, // SBRG
    { lat: -22.91, lng: -43.163, city: 'SANTOS DUMONT', size: 0.04, type: 'city' }, // SBRJ
    { lat: -21.134, lng: -47.774, city: 'LEITE LOPES', size: 0.04, type: 'city' }, // SBRP
    { lat: -22.932, lng: -43.719, city: 'SANTA CRUZ', size: 0.04, type: 'city' }, // SBSC
    { lat: -23.229, lng: -45.861, city: 'SAO JOSE DOS CAMPOS', size: 0.04, type: 'city' }, // SBSJ
    { lat: -2.589, lng: -44.236, city: 'MARECHAL CUNHA MACHADO', size: 0.04, type: 'city' }, // SBSL
    { lat: -29.711, lng: -53.688, city: 'SANTA MARIA', size: 0.04, type: 'city' }, // SBSM
    { lat: -23.627, lng: -46.655, city: 'CONGONHAS', size: 0.04, type: 'city' }, // SBSP
    { lat: -20.816, lng: -49.406, city: 'SAO JOSE DO RIO PRETO', size: 0.04, type: 'city' }, // SBSR
    { lat: -23.925, lng: -46.288, city: 'SANTOS AIR BASE', size: 0.04, type: 'city' }, // SBST
    { lat: -12.911, lng: -38.331, city: 'DEPUTADO LUIS EDUARDO MAGALHAES', size: 0.04, type: 'city' }, // SBSV
    { lat: -1.489, lng: -56.397, city: 'TROMBETAS', size: 0.04, type: 'city' }, // SBTB
    { lat: -5.06, lng: -42.823, city: 'SENADOR PETRONIO PORTELLA', size: 0.04, type: 'city' }, // SBTE
    { lat: -3.383, lng: -64.724, city: 'TEFE', size: 0.04, type: 'city' }, // SBTF
    { lat: -8.155, lng: -70.783, city: 'TARAUACA', size: 0.04, type: 'city' }, // SBTK
    { lat: -24.317, lng: -50.651, city: 'TELEMACO BORBA', size: 0.04, type: 'city' }, // SBTL
    { lat: 2.223, lng: -55.946, city: 'TIRIOS', size: 0.04, type: 'city' }, // SBTS
    { lat: -4.256, lng: -69.936, city: 'TABATINGA', size: 0.04, type: 'city' }, // SBTT
    { lat: -3.785, lng: -49.719, city: 'TUCURUI', size: 0.04, type: 'city' }, // SBTU
    { lat: -0.148, lng: -66.986, city: 'SAO GABRIEL DA CACHOEIRA', size: 0.04, type: 'city' }, // SBUA
    { lat: -9.401, lng: -38.251, city: 'PAULO AFONSO', size: 0.04, type: 'city' }, // SBUF
    { lat: -29.782, lng: -57.038, city: 'RUBEM BERTA', size: 0.04, type: 'city' }, // SBUG
    { lat: -18.883, lng: -48.226, city: 'UBERLANDIA', size: 0.04, type: 'city' }, // SBUL
    { lat: -20.777, lng: -51.565, city: 'URUBUPUNGA', size: 0.04, type: 'city' }, // SBUP
    { lat: -19.765, lng: -47.965, city: 'UBERABA', size: 0.04, type: 'city' }, // SBUR
    { lat: -21.59, lng: -45.473, city: 'MAJOR BRIGADEIRO TROMPOWSKY', size: 0.04, type: 'city' }, // SBVG
    { lat: -12.694, lng: -60.098, city: 'VILHENA', size: 0.04, type: 'city' }, // SBVH
    { lat: -20.256, lng: -40.289, city: 'GOIABEIRAS', size: 0.04, type: 'city' }, // SBVT
    { lat: 0.607, lng: -69.186, city: 'IAUARETE', size: 0.04, type: 'city' }, // SBYA
    { lat: -21.985, lng: -47.338, city: 'CAMPO FONTENELLE', size: 0.04, type: 'city' }, // SBYS
    { lat: -41.906, lng: -73.797, city: 'PUPELDE', size: 0.04, type: 'city' }, // SCAC
    { lat: -43.615, lng: -71.807, city: 'ALTO PALENA', size: 0.04, type: 'city' }, // SCAP
    { lat: -18.348, lng: -70.339, city: 'CHACALLUTA', size: 0.04, type: 'city' }, // SCAR
    { lat: -45.916, lng: -71.689, city: 'BALMACEDA', size: 0.04, type: 'city' }, // SCBA
    { lat: -33.562, lng: -70.688, city: 'EL BOSQUE', size: 0.04, type: 'city' }, // SCBQ
    { lat: -46.582, lng: -71.698, city: 'CHILE CHICO', size: 0.04, type: 'city' }, // SCCC
    { lat: -22.499, lng: -68.904, city: 'EL LOA', size: 0.04, type: 'city' }, // SCCF
    { lat: -36.583, lng: -72.032, city: 'GENERAL BERNARDO O HIGGINS', size: 0.04, type: 'city' }, // SCCH
    { lat: -53.003, lng: -70.855, city: 'CARLOS IBANEZ DEL CAMPO INTERNATIONAL', size: 0.04, type: 'city' }, // SCCI
    { lat: -45.594, lng: -72.106, city: 'TENIENTE VIDAL', size: 0.04, type: 'city' }, // SCCY
    { lat: -20.535, lng: -70.181, city: 'DIEGO ARACENA INTERNATIONAL', size: 0.04, type: 'city' }, // SCDA
    { lat: -33.393, lng: -70.786, city: 'ARTURO MERINO BENITEZ INTERNATIONAL', size: 0.04, type: 'city' }, // SCEL
    { lat: -23.444, lng: -70.445, city: 'CERRO MORENO INTERNATIONAL', size: 0.04, type: 'city' }, // SCFA
    { lat: -53.254, lng: -70.319, city: 'CAPITAN FUENTES MARTINEZ', size: 0.04, type: 'city' }, // SCFM
    { lat: -37.402, lng: -72.426, city: 'MARIA DOLORES', size: 0.04, type: 'city' }, // SCGE
    { lat: -54.931, lng: -67.626, city: 'GUARDIAMARINA ZANARTU', size: 0.04, type: 'city' }, // SCGZ
    { lat: -27.296, lng: -70.414, city: 'CHAMONATE', size: 0.04, type: 'city' }, // SCHA
    { lat: -34.967, lng: -71.217, city: 'GENERAL FREIRE', size: 0.04, type: 'city' }, // SCIC
    { lat: -36.773, lng: -73.063, city: 'CARRIEL SUR INTERNATIONAL', size: 0.04, type: 'city' }, // SCIE
    { lat: -27.165, lng: -109.422, city: 'MATAVERI INTERNATIONAL', size: 0.04, type: 'city' }, // SCIP
    { lat: -40.611, lng: -73.06, city: 'CANAL BAJO CARLOS HOTT SIEBERT', size: 0.04, type: 'city' }, // SCJO
    { lat: -28.598, lng: -70.759, city: 'VALLENAR', size: 0.04, type: 'city' }, // SCLL
    { lat: -34.174, lng: -70.776, city: 'DE LA INDEPENDENCIA', size: 0.04, type: 'city' }, // SCRG
    { lat: -62.191, lng: -58.987, city: 'TENIENTE RODOLFO MARSH MARTIN', size: 0.04, type: 'city' }, // SCRM
    { lat: -29.916, lng: -71.191, city: 'LA FLORIDA', size: 0.04, type: 'city' }, // SCSE
    { lat: -33.657, lng: -71.616, city: 'SANTO DOMINGO', size: 0.04, type: 'city' }, // SCSN
    { lat: -42.491, lng: -73.774, city: 'GAMBOA', size: 0.04, type: 'city' }, // SCST
    { lat: -33.456, lng: -70.547, city: 'EULOGIO SANCHEZ', size: 0.04, type: 'city' }, // SCTB
    { lat: -38.769, lng: -72.636, city: 'MAQUEHUE', size: 0.04, type: 'city' }, // SCTC
    { lat: -41.439, lng: -73.094, city: 'EL TEPUAL INTERNATIONAL', size: 0.04, type: 'city' }, // SCTE
    { lat: -33.493, lng: -70.698, city: 'LOS CERRILLOS', size: 0.04, type: 'city' }, // SCTI
    { lat: -42.933, lng: -72.699, city: 'CHAITEN', size: 0.04, type: 'city' }, // SCTN
    { lat: -39.65, lng: -73.086, city: 'PICHOY', size: 0.04, type: 'city' }, // SCVD
    { lat: -1.212, lng: -78.574, city: 'CHACHOAN', size: 0.04, type: 'city' }, // SEAM
    { lat: -1.706, lng: -79.379, city: 'HACIENDA CLEMENTINA', size: 0.04, type: 'city' }, // SECM
    { lat: -0.463, lng: -76.986, city: 'FRANCISCO DE ORELLANA', size: 0.04, type: 'city' }, // SECO
    { lat: -2.889, lng: -78.984, city: 'MARISCAL LAMAR', size: 0.04, type: 'city' }, // SECU
    { lat: -0.454, lng: -90.266, city: 'SEYMOUR', size: 0.04, type: 'city' }, // SEGS
    { lat: -2.158, lng: -79.884, city: 'SIMON BOLIVAR INTERNATIONAL', size: 0.04, type: 'city' }, // SEGU
    { lat: -3.423, lng: -78.573, city: 'GUALAQUIZA', size: 0.04, type: 'city' }, // SEGZ
    { lat: 0.338, lng: -78.136, city: 'ATAHUALPA', size: 0.04, type: 'city' }, // SEIB
    { lat: 0.092, lng: -76.869, city: 'LAGO AGRIO', size: 0.04, type: 'city' }, // SELA
    { lat: -1.704, lng: -79.552, city: 'HACIENDA LA JULIA', size: 0.04, type: 'city' }, // SELJ
    { lat: -1.501, lng: -79.481, city: 'LOMA LARGA', size: 0.04, type: 'city' }, // SELM
    { lat: -0.907, lng: -78.616, city: 'COTOPAXI INTERNATIONAL', size: 0.04, type: 'city' }, // SELT
    { lat: -4.38, lng: -79.941, city: 'J M VELASCO IBARRA', size: 0.04, type: 'city' }, // SEMA
    { lat: -2.299, lng: -78.121, city: 'MACAS', size: 0.04, type: 'city' }, // SEMC
    { lat: -3.269, lng: -79.962, city: 'GENERAL SERRANO', size: 0.04, type: 'city' }, // SEMH
    { lat: -2.067, lng: -76.975, city: 'EL CARMEN', size: 0.04, type: 'city' }, // SEMO
    { lat: -0.946, lng: -80.678, city: 'ELOY ALFARO INTERNATIONAL', size: 0.04, type: 'city' }, // SEMT
    { lat: -2.851, lng: -79.804, city: 'MARAGROSA', size: 0.04, type: 'city' }, // SEMX
    { lat: -1.74, lng: -79.622, city: 'MARTINICA', size: 0.04, type: 'city' }, // SEMY
    { lat: 0.073, lng: -80.052, city: 'PEDERNALES', size: 0.04, type: 'city' }, // SEPD
    { lat: -1.041, lng: -80.472, city: 'REALES TAMARINDOS', size: 0.04, type: 'city' }, // SEPV
    { lat: -0.141, lng: -78.488, city: 'MARISCAL SUCRE INTERNATIONAL', size: 0.04, type: 'city' }, // SEQU
    { lat: -1.654, lng: -78.656, city: 'CHIMBORAZO', size: 0.04, type: 'city' }, // SERB
    { lat: -3.435, lng: -79.978, city: 'VICTOR LARREA', size: 0.04, type: 'city' }, // SERO
    { lat: -2.205, lng: -80.989, city: 'GENERAL ULPIANO PAEZ', size: 0.04, type: 'city' }, // SESA
    { lat: -0.248, lng: -79.214, city: 'SANTO DOMINGO LOS COLORADOS', size: 0.04, type: 'city' }, // SESD
    { lat: -0.91, lng: -89.616, city: 'SAN CRISTOBAL', size: 0.04, type: 'city' }, // SEST
    { lat: -2.261, lng: -79.689, city: 'TAURA', size: 0.04, type: 'city' }, // SETA
    { lat: -0.987, lng: -77.819, city: 'MAYOR GALO TORRES', size: 0.04, type: 'city' }, // SETE
    { lat: -0.123, lng: -76.337, city: 'TARAPOA', size: 0.04, type: 'city' }, // SETR
    { lat: 0.809, lng: -77.708, city: 'EL ROSAL TENIENTE MANTILLA', size: 0.04, type: 'city' }, // SETU
    { lat: -51.686, lng: -57.777, city: 'STANLEY', size: 0.04, type: 'city' }, // SFAL
    { lat: -25.24, lng: -57.519, city: 'SILVIO PETTIROSSI INTERNATIONAL', size: 0.04, type: 'city' }, // SGAS
    { lat: -27.371, lng: -56.854, city: 'JUAN DE AYOLAS', size: 0.04, type: 'city' }, // SGAY
    { lat: -23.442, lng: -57.427, city: 'TENIENTE COL CARMELO PERALTA', size: 0.04, type: 'city' }, // SGCO
    { lat: -22.36, lng: -60.054, city: 'FILADELFIA', size: 0.04, type: 'city' }, // SGFI
    { lat: -25.407, lng: -54.619, city: 'ITAIPU', size: 0.04, type: 'city' }, // SGIB
    { lat: -22.045, lng: -60.622, city: 'DR LUIS MARIA ARGANA INTERNATIONAL', size: 0.04, type: 'city' }, // SGME
    { lat: -26.881, lng: -58.318, city: 'CARLOS MIGUEL JIMENEZ', size: 0.04, type: 'city' }, // SGPI
    { lat: 4.454, lng: -75.765, city: 'EL EDEN', size: 0.04, type: 'city' }, // SKAR
    { lat: 0.505, lng: -76.501, city: 'TRES DE MAYO', size: 0.04, type: 'city' }, // SKAS
    { lat: 9.045, lng: -73.975, city: 'LAS FLORES', size: 0.04, type: 'city' }, // SKBC
    { lat: 7.126, lng: -73.185, city: 'PALONEGRO', size: 0.04, type: 'city' }, // SKBG
    { lat: 4.701, lng: -74.147, city: 'ELDORADO INTERNATIONAL', size: 0.04, type: 'city' }, // SKBO
    { lat: 10.889, lng: -74.781, city: 'ERNESTO CORTISSOZ', size: 0.04, type: 'city' }, // SKBQ
    { lat: 6.203, lng: -77.394, city: 'JOSE CELESTINO MUTIS', size: 0.04, type: 'city' }, // SKBS
    { lat: 3.819, lng: -76.99, city: 'GERARDO TOBAR LOPEZ', size: 0.04, type: 'city' }, // SKBU
    { lat: 7.928, lng: -72.511, city: 'CAMILO DAZA', size: 0.04, type: 'city' }, // SKCC
    { lat: 5.072, lng: -76.676, city: 'MANDINGA', size: 0.04, type: 'city' }, // SKCD
    { lat: 10.442, lng: -75.513, city: 'RAFAEL NUNEZ', size: 0.04, type: 'city' }, // SKCG
    { lat: 3.543, lng: -76.381, city: 'ALFONSO BONILLA ARAGON INTERNATIONAL', size: 0.04, type: 'city' }, // SKCL
    { lat: 1.814, lng: -78.749, city: 'LA FLORIDA', size: 0.04, type: 'city' }, // SKCO
    { lat: 9.332, lng: -75.286, city: 'LAS BRUJAS', size: 0.04, type: 'city' }, // SKCZ
    { lat: 7.024, lng: -73.807, city: 'YARIGUIES', size: 0.04, type: 'city' }, // SKEJ
    { lat: 1.59, lng: -75.564, city: 'GUSTAVO ARTUNDUAGA PAREDES', size: 0.04, type: 'city' }, // SKFL
    { lat: 4.276, lng: -74.797, city: 'SANTIAGO VILA', size: 0.04, type: 'city' }, // SKGI
    { lat: 4.758, lng: -75.956, city: 'SANTA ANA', size: 0.04, type: 'city' }, // SKGO
    { lat: 2.57, lng: -77.898, city: 'GUAPI', size: 0.04, type: 'city' }, // SKGP
    { lat: 4.812, lng: -74.065, city: 'GUAYMARAL', size: 0.04, type: 'city' }, // SKGY
    { lat: 4.421, lng: -75.133, city: 'PERALES', size: 0.04, type: 'city' }, // SKIB
    { lat: 0.862, lng: -77.672, city: 'SAN LUIS', size: 0.04, type: 'city' }, // SKIP
    { lat: 7.812, lng: -76.716, city: 'ANTONIO ROLDAN BETANCOURT', size: 0.04, type: 'city' }, // SKLC
    { lat: 11.232, lng: -72.49, city: 'LA MINA', size: 0.04, type: 'city' }, // SKLM
    { lat: -4.193, lng: -69.943, city: 'ALFREDO VASQUEZ COBO', size: 0.04, type: 'city' }, // SKLT
    { lat: 6.22, lng: -75.591, city: 'OLAYA HERRERA', size: 0.04, type: 'city' }, // SKMD
    { lat: 9.283, lng: -74.839, city: 'BARACOA', size: 0.04, type: 'city' }, // SKMG
    { lat: 8.824, lng: -75.826, city: 'LOS GARZONES', size: 0.04, type: 'city' }, // SKMR
    { lat: 1.254, lng: -70.234, city: 'FABIO ALBERTO LEON BENTLEY', size: 0.04, type: 'city' }, // SKMU
    { lat: 5.03, lng: -75.465, city: 'LA NUBIA', size: 0.04, type: 'city' }, // SKMZ
    { lat: 2.95, lng: -75.294, city: 'BENITO SALAS', size: 0.04, type: 'city' }, // SKNV
    { lat: 8.315, lng: -73.358, city: 'AGUAS CLARAS', size: 0.04, type: 'city' }, // SKOC
    { lat: 7.01, lng: -74.715, city: 'OTU', size: 0.04, type: 'city' }, // SKOT
    { lat: 12.221, lng: -71.985, city: 'PUERTO BOLIVAR', size: 0.04, type: 'city' }, // SKPB
    { lat: 6.184, lng: -67.493, city: 'PUERTO CARRENO', size: 0.04, type: 'city' }, // SKPC
    { lat: 4.813, lng: -75.739, city: 'MATECANA', size: 0.04, type: 'city' }, // SKPE
    { lat: 1.858, lng: -76.086, city: 'PITALITO', size: 0.04, type: 'city' }, // SKPI
    { lat: 2.454, lng: -76.61, city: 'GUILLERMO LEON VALENCIA', size: 0.04, type: 'city' }, // SKPP
    { lat: 1.396, lng: -77.291, city: 'ANTONIO NARINO', size: 0.04, type: 'city' }, // SKPS
    { lat: 13.357, lng: -81.358, city: 'EL EMBRUJO', size: 0.04, type: 'city' }, // SKPV
    { lat: 5.213, lng: -74.884, city: 'MARIQUITA', size: 0.04, type: 'city' }, // SKQU
    { lat: 6.164, lng: -75.423, city: 'JOSE MARIA CORDOVA', size: 0.04, type: 'city' }, // SKRG
    { lat: 11.526, lng: -72.926, city: 'ALMIRANTE PADILLA', size: 0.04, type: 'city' }, // SKRH
    { lat: 6.958, lng: -71.855, city: 'LOS COLONIZADORES', size: 0.04, type: 'city' }, // SKSA
    { lat: 2.579, lng: -72.639, city: 'JORGE E GONZALEZ TORRES', size: 0.04, type: 'city' }, // SKSJ
    { lat: 11.119, lng: -74.231, city: 'SIMON BOLIVAR', size: 0.04, type: 'city' }, // SKSM
    { lat: 12.583, lng: -81.711, city: 'GUSTAVO ROJAS PINILLA', size: 0.04, type: 'city' }, // SKSP
    { lat: 2.152, lng: -74.766, city: 'EDUARDO FALLA SOLANO', size: 0.04, type: 'city' }, // SKSV
    { lat: 5.43, lng: -71.658, city: 'TRINIDAD', size: 0.04, type: 'city' }, // SKTD
    { lat: 6.451, lng: -71.76, city: 'TAME', size: 0.04, type: 'city' }, // SKTM
    { lat: 8.074, lng: -76.741, city: 'GONZALO MEJIA', size: 0.04, type: 'city' }, // SKTU
    { lat: 7.069, lng: -70.737, city: 'SANTIAGO PEREZ', size: 0.04, type: 'city' }, // SKUC
    { lat: 5.691, lng: -76.641, city: 'EL CARANO', size: 0.04, type: 'city' }, // SKUI
    { lat: 4.088, lng: -76.235, city: 'FARFAN', size: 0.04, type: 'city' }, // SKUL
    { lat: 10.435, lng: -73.249, city: 'ALFONSO LOPEZ PUMAREJO', size: 0.04, type: 'city' }, // SKVP
    { lat: 4.168, lng: -73.614, city: 'VANGUARDIA', size: 0.04, type: 'city' }, // SKVV
    { lat: 5.319, lng: -72.384, city: 'EL YOPAL', size: 0.04, type: 'city' }, // SKYP
    { lat: -14.739, lng: -68.411, city: 'APOLO', size: 0.04, type: 'city' }, // SLAP
    { lat: -15.719, lng: -63.092, city: 'ASCENSION DE GUARAYOS', size: 0.04, type: 'city' }, // SLAS
    { lat: -22.769, lng: -64.315, city: 'BERMEJO', size: 0.04, type: 'city' }, // SLBJ
    { lat: -20.007, lng: -63.527, city: 'CAMIRI', size: 0.04, type: 'city' }, // SLCA
    { lat: -17.421, lng: -66.177, city: 'JORGE WILSTERMAN', size: 0.04, type: 'city' }, // SLCB
    { lat: -16.99, lng: -65.141, city: 'CHIMORE', size: 0.04, type: 'city' }, // SLCH
    { lat: -17.594, lng: -69.434, city: 'CHARANA', size: 0.04, type: 'city' }, // SLCN
    { lat: -11.04, lng: -68.783, city: 'CAPITAN ANIBAL ARAB', size: 0.04, type: 'city' }, // SLCO
    { lat: -16.143, lng: -62.026, city: 'CONCEPCION', size: 0.04, type: 'city' }, // SLCP
    { lat: -10.822, lng: -65.346, city: 'CAP DE AV EMILIO BELTRAN', size: 0.04, type: 'city' }, // SLGY
    { lat: -13.053, lng: -64.662, city: 'SAN JOAQUIN', size: 0.04, type: 'city' }, // SLJO
    { lat: -16.513, lng: -68.192, city: 'EL ALTO INTERNATIONAL', size: 0.04, type: 'city' }, // SLLP
    { lat: -13.254, lng: -64.063, city: 'MAGDALENA', size: 0.04, type: 'city' }, // SLMG
    { lat: -17.963, lng: -67.076, city: 'JUAN MENDOZA', size: 0.04, type: 'city' }, // SLOR
    { lat: -19.543, lng: -65.724, city: 'CAPITAN NICOLAS ROJAS', size: 0.04, type: 'city' }, // SLPO
    { lat: -18.975, lng: -57.821, city: 'CAP DE AV SALVADOR OGAYA G', size: 0.04, type: 'city' }, // SLPS
    { lat: -13.264, lng: -64.605, city: 'SAN RAMON', size: 0.04, type: 'city' }, // SLRA
    { lat: -18.328, lng: -59.766, city: 'ROBORE', size: 0.04, type: 'city' }, // SLRB
    { lat: -11.01, lng: -66.073, city: 'CAP DE AV SELIN ZEITUN LOPEZ', size: 0.04, type: 'city' }, // SLRI
    { lat: -14.428, lng: -67.501, city: 'RURRENABAQUE', size: 0.04, type: 'city' }, // SLRQ
    { lat: -14.306, lng: -67.354, city: 'REYES', size: 0.04, type: 'city' }, // SLRY
    { lat: -13.762, lng: -65.435, city: 'SANTA ANA DEL YACUMA', size: 0.04, type: 'city' }, // SLSA
    { lat: -14.857, lng: -66.737, city: 'CAPITAN GERMAN QUIROGA G', size: 0.04, type: 'city' }, // SLSB
    { lat: -16.384, lng: -60.963, city: 'CAP AV JUAN COCHAMANIDIS SAUCEDO', size: 0.04, type: 'city' }, // SLSI
    { lat: -14.966, lng: -65.634, city: 'SAN IGNACIO DE MOXOS', size: 0.04, type: 'city' }, // SLSM
    { lat: -19.007, lng: -65.289, city: 'JUANA AZURDUY DE PADILLA', size: 0.04, type: 'city' }, // SLSU
    { lat: -16.339, lng: -58.402, city: 'SAN MATIAS', size: 0.04, type: 'city' }, // SLTI
    { lat: -21.556, lng: -64.701, city: 'CAPITAN ORIEL LEA PLAZA', size: 0.04, type: 'city' }, // SLTJ
    { lat: -14.819, lng: -64.918, city: 'TTE AV JORGE HENRICH ARAUZ', size: 0.04, type: 'city' }, // SLTR
    { lat: -17.645, lng: -63.135, city: 'VIRU VIRU INTERNATIONAL', size: 0.04, type: 'city' }, // SLVR
    { lat: 5.453, lng: -55.188, city: 'JOHAN A PENGEL INTERNATIONAL', size: 0.04, type: 'city' }, // SMJP
    { lat: 5.811, lng: -55.191, city: 'ZORG EN HOOP', size: 0.04, type: 'city' }, // SMZO
    { lat: 4.82, lng: -52.36, city: 'ROCHAMBEAU', size: 0.04, type: 'city' }, // SOCA
    { lat: 3.897, lng: -51.804, city: 'ST GEORGES DE L OYAPOCK', size: 0.04, type: 'city' }, // SOOG
    { lat: -4.607, lng: -77.941, city: 'CIRO ALEGRIA', size: 0.04, type: 'city' }, // SPAC
    { lat: -2.795, lng: -76.466, city: 'ANDOAS', size: 0.04, type: 'city' }, // SPAS
    { lat: -10.729, lng: -73.766, city: 'ATALAYA', size: 0.04, type: 'city' }, // SPAY
    { lat: -6.019, lng: -76.988, city: 'MOYOBAMBA', size: 0.04, type: 'city' }, // SPBB
    { lat: -3.917, lng: -70.508, city: 'CABALLOCOCHA', size: 0.04, type: 'city' }, // SPBC
    { lat: -11.411, lng: -69.489, city: 'IBERIA', size: 0.04, type: 'city' }, // SPBR
    { lat: -8.378, lng: -74.574, city: 'CAP FAP DAVID AVENZUR RENGIFO', size: 0.04, type: 'city' }, // SPCL
    { lat: -9.151, lng: -78.524, city: 'TENIENTE FAP JAIME A DE MONTR MORALES', size: 0.04, type: 'city' }, // SPEO
    { lat: -9.768, lng: -70.706, city: 'PUERTO ESPERANZA', size: 0.04, type: 'city' }, // SPEP
    { lat: -17.179, lng: -70.931, city: 'CESAR TORQUE PODESTA', size: 0.04, type: 'city' }, // SPEQ
    { lat: -9.29, lng: -76.006, city: 'TINGO MARIA', size: 0.04, type: 'city' }, // SPGM
    { lat: -6.787, lng: -79.828, city: 'CAPT JOSE ABELARDO QUINONES GONZALES', size: 0.04, type: 'city' }, // SPHI
    { lat: -13.155, lng: -74.204, city: 'CORONEL FAP ALFREDO MENDIVIL DUARTE', size: 0.04, type: 'city' }, // SPHO
    { lat: -13.706, lng: -73.35, city: 'ANDAHUAYLAS', size: 0.04, type: 'city' }, // SPHY
    { lat: -9.347, lng: -77.598, city: 'COMMANDANTE FAP GERMAN ARIAS GRAZZIANI', size: 0.04, type: 'city' }, // SPHZ
    { lat: -12.022, lng: -77.114, city: 'JORGE CHAVEZ INTERNATIONAL', size: 0.04, type: 'city' }, // SPIM
    { lat: -7.169, lng: -76.728, city: 'JUANJUI', size: 0.04, type: 'city' }, // SPJI
    { lat: -11.783, lng: -75.473, city: 'JAUJA', size: 0.04, type: 'city' }, // SPJJ
    { lat: -15.467, lng: -70.158, city: 'JULIACA', size: 0.04, type: 'city' }, // SPJL
    { lat: -15.357, lng: -75.136, city: 'SAN JUAN DE MARCONA', size: 0.04, type: 'city' }, // SPJN
    { lat: -7.136, lng: -78.49, city: 'MAJ GEN FAP ARMANDO REVOREDO IGLESIAS', size: 0.04, type: 'city' }, // SPJR
    { lat: -17.695, lng: -71.344, city: 'ILO', size: 0.04, type: 'city' }, // SPLO
    { lat: -12.161, lng: -76.999, city: 'LAS PALMAS', size: 0.04, type: 'city' }, // SPLP
    { lat: -3.552, lng: -80.381, city: 'PEDRO CANGA', size: 0.04, type: 'city' }, // SPME
    { lat: -5.894, lng: -76.118, city: 'MOISES BENZAQUEN RENGIFO', size: 0.04, type: 'city' }, // SPMS
    { lat: -9.878, lng: -76.204, city: 'ALFEREZ FAP D F FERNANDINI', size: 0.04, type: 'city' }, // SPNC
    { lat: -11.929, lng: -77.061, city: 'COLLIQUE', size: 0.04, type: 'city' }, // SPOL
    { lat: -6.202, lng: -77.856, city: 'CHACHAPOYAS', size: 0.04, type: 'city' }, // SPPY
    { lat: -3.785, lng: -73.309, city: 'CORONEL FAP FRANCISCO SECADA VIGNETTA', size: 0.04, type: 'city' }, // SPQT
    { lat: -16.341, lng: -71.583, city: 'RODRIGUEZ BALLON', size: 0.04, type: 'city' }, // SPQU
    { lat: -11.129, lng: -75.35, city: 'SAN RAMON', size: 0.04, type: 'city' }, // SPRM
    { lat: -8.085, lng: -79.109, city: 'CAPITAN CARLOS MARTINEZ DE PINILLOS', size: 0.04, type: 'city' }, // SPRU
    { lat: -13.745, lng: -76.22, city: 'PISCO', size: 0.04, type: 'city' }, // SPSO
    { lat: -6.509, lng: -76.373, city: 'TARAPOTO', size: 0.04, type: 'city' }, // SPST
    { lat: -18.053, lng: -70.276, city: 'CORONEL FAP CARLOS CIRIANI SANTA ROSA', size: 0.04, type: 'city' }, // SPTN
    { lat: -4.55, lng: -81.224, city: 'EL PATO AB', size: 0.04, type: 'city' }, // SPTP
    { lat: -12.614, lng: -69.229, city: 'PADRE ALDAMIZ', size: 0.04, type: 'city' }, // SPTU
    { lat: -5.206, lng: -80.616, city: 'CAPITAN CONCHA', size: 0.04, type: 'city' }, // SPUR
    { lat: -4.576, lng: -81.254, city: 'CAPITAN MONTES', size: 0.04, type: 'city' }, // SPYL
    { lat: -14.854, lng: -74.961, city: 'NASCA', size: 0.04, type: 'city' }, // SPZA
    { lat: -13.536, lng: -71.939, city: 'VELAZCO ASTETE', size: 0.04, type: 'city' }, // SPZO
    { lat: -34.789, lng: -56.264, city: 'ANGEL S ADAMI', size: 0.04, type: 'city' }, // SUAA
    { lat: -30.401, lng: -56.508, city: 'ARTIGAS INTERNATIONAL', size: 0.04, type: 'city' }, // SUAG
    { lat: -34.456, lng: -57.771, city: 'LAGUNA DE LOS PATOS INTERNATIONAL', size: 0.04, type: 'city' }, // SUCA
    { lat: -33.359, lng: -56.499, city: 'SANTA BERNARDINA INTERNATIONAL', size: 0.04, type: 'city' }, // SUDU
    { lat: -34.855, lng: -55.094, city: 'CAPITAN CORBETA C A CURBELO INTERNATIONAL', size: 0.04, type: 'city' }, // SULS
    { lat: -32.338, lng: -54.217, city: 'CERRO LARGO', size: 0.04, type: 'city' }, // SUMO
    { lat: -34.838, lng: -56.03, city: 'CARRASCO INTERNATIONAL', size: 0.04, type: 'city' }, // SUMU
    { lat: -34.914, lng: -54.921, city: 'EL JAGUEL INTERNATIONAL', size: 0.04, type: 'city' }, // SUPE
    { lat: -32.365, lng: -58.061, city: 'TYDEO LARRE BORGES INTERNATIONAL', size: 0.04, type: 'city' }, // SUPU
    { lat: -30.974, lng: -55.476, city: 'RIVERA INTERNATIONAL', size: 0.04, type: 'city' }, // SURV
    { lat: -31.44, lng: -57.991, city: 'NUEVA HESPERIDES INTERNATIONAL', size: 0.04, type: 'city' }, // SUSO
    { lat: -31.749, lng: -55.926, city: 'TACUAREMBO', size: 0.04, type: 'city' }, // SUTB
    { lat: 9.553, lng: -69.238, city: 'OSWALDO GUEVARA MUJICA', size: 0.04, type: 'city' }, // SVAC
    { lat: 9.429, lng: -64.471, city: 'ANACO', size: 0.04, type: 'city' }, // SVAN
    { lat: 4.052, lng: -67.701, city: 'SAN FERNANDO DE ATABAPO', size: 0.04, type: 'city' }, // SVAT
    { lat: 10.107, lng: -64.689, city: 'GENERAL JOSE ANTONIO ANZOATEGUI INTERNATIONAL', size: 0.04, type: 'city' }, // SVBC
    { lat: 8.619, lng: -70.221, city: 'BARINAS', size: 0.04, type: 'city' }, // SVBI
    { lat: 10.183, lng: -67.557, city: 'EL LIBERTADOR AB', size: 0.04, type: 'city' }, // SVBL
    { lat: 10.043, lng: -69.358, city: 'BARQUISIMETO INTERNATIONAL', size: 0.04, type: 'city' }, // SVBM
    { lat: 10.25, lng: -67.649, city: 'MARISCAL SUCRE', size: 0.04, type: 'city' }, // SVBS
    { lat: 8.122, lng: -63.537, city: 'CIUDAD BOLIVAR', size: 0.04, type: 'city' }, // SVCB
    { lat: 7.626, lng: -66.165, city: 'CAICARA DE ORINOCO', size: 0.04, type: 'city' }, // SVCD
    { lat: 9.649, lng: -68.575, city: 'SAN CARLOS', size: 0.04, type: 'city' }, // SVCJ
    { lat: 8.924, lng: -67.417, city: 'CALABOZO', size: 0.04, type: 'city' }, // SVCL
    { lat: 6.232, lng: -62.854, city: 'CANAIMA', size: 0.04, type: 'city' }, // SVCN
    { lat: 10.176, lng: -70.065, city: 'CARORA', size: 0.04, type: 'city' }, // SVCO
    { lat: 10.66, lng: -63.262, city: 'GENERAL JOSE FRANCISCO BERMUDEZ', size: 0.04, type: 'city' }, // SVCP
    { lat: 11.415, lng: -69.681, city: 'JOSE LEONARDO CHIRINOS', size: 0.04, type: 'city' }, // SVCR
    { lat: 10.286, lng: -66.816, city: 'OSCAR MACHADO ZULOAGA', size: 0.04, type: 'city' }, // SVCS
    { lat: 10.45, lng: -64.13, city: 'ANTONIO JOSE DE SUCRE', size: 0.04, type: 'city' }, // SVCU
    { lat: 9.372, lng: -66.923, city: 'CAPITAN MANUEL RIOS GUARICO AIRBASE', size: 0.04, type: 'city' }, // SVCZ
    { lat: 6.715, lng: -61.639, city: 'EL DORADO', size: 0.04, type: 'city' }, // SVED
    { lat: 7.06, lng: -69.497, city: 'ELORZA', size: 0.04, type: 'city' }, // SVEZ
    { lat: 7.211, lng: -70.756, city: 'GUASDUALITO', size: 0.04, type: 'city' }, // SVGD
    { lat: 10.574, lng: -62.313, city: 'GUIRIA', size: 0.04, type: 'city' }, // SVGI
    { lat: 9.027, lng: -69.755, city: 'GUANARE', size: 0.04, type: 'city' }, // SVGU
    { lat: 10.462, lng: -66.093, city: 'HIGUEROTE', size: 0.04, type: 'city' }, // SVHG
    { lat: 10.794, lng: -63.981, city: 'ANDRES MIGUEL SALAZAR MARCANO', size: 0.04, type: 'city' }, // SVIE
    { lat: 11.781, lng: -70.152, city: 'JOSEFA CAMEJO', size: 0.04, type: 'city' }, // SVJC
    { lat: 9.907, lng: -67.379, city: 'SAN JUAN DE LOS MORROS', size: 0.04, type: 'city' }, // SVJM
    { lat: 8.239, lng: -72.271, city: 'LA FRIA', size: 0.04, type: 'city' }, // SVLF
    { lat: 11.809, lng: -66.179, city: 'LA ORCHILA', size: 0.04, type: 'city' }, // SVLO
    { lat: 10.558, lng: -71.728, city: 'LA CHINITA INTERNATIONAL', size: 0.04, type: 'city' }, // SVMC
    { lat: 8.582, lng: -71.161, city: 'ALBERTO CARNEVALLI', size: 0.04, type: 'city' }, // SVMD
    { lat: 10.912, lng: -63.966, city: 'DEL CARIBE INTERNATIONAL GEN SANTAGO MARINO', size: 0.04, type: 'city' }, // SVMG
    { lat: 10.603, lng: -66.991, city: 'SIMON BOLIVAR INTERNATIONAL', size: 0.04, type: 'city' }, // SVMI
    { lat: 9.749, lng: -63.152, city: 'MATURIN', size: 0.04, type: 'city' }, // SVMT
    { lat: 5.62, lng: -67.606, city: 'CASIQUE ARAMARE', size: 0.04, type: 'city' }, // SVPA
    { lat: 10.48, lng: -68.073, city: 'GENERAL BARTOLOME SALOM INTERNATIONAL', size: 0.04, type: 'city' }, // SVPC
    { lat: 7.801, lng: -72.203, city: 'PARAMILLO', size: 0.04, type: 'city' }, // SVPM
    { lat: 8.288, lng: -62.76, city: 'GENERAL MANUEL CARLOS PIAR', size: 0.04, type: 'city' }, // SVPR
    { lat: 7.576, lng: -70.174, city: 'PALMARITO', size: 0.04, type: 'city' }, // SVPT
    { lat: 7.852, lng: -72.435, city: 'SAN ANTONIO DEL TACHIRA', size: 0.04, type: 'city' }, // SVSA
    { lat: 7.803, lng: -71.166, city: 'SANTA BARBARA DE BARINAS', size: 0.04, type: 'city' }, // SVSB
    { lat: 7.565, lng: -72.035, city: 'MAYOR BUENAVENTURA VIVAS', size: 0.04, type: 'city' }, // SVSO
    { lat: 10.279, lng: -68.755, city: 'SUB TENIENTE NESTOR ARIAS', size: 0.04, type: 'city' }, // SVSP
    { lat: 7.883, lng: -67.444, city: 'SAN FERNANDO DE APURE', size: 0.04, type: 'city' }, // SVSR
    { lat: 8.945, lng: -64.151, city: 'SAN TOME', size: 0.04, type: 'city' }, // SVST
    { lat: 8.974, lng: -71.943, city: 'SANTA BARBARA DEL ZULIA', size: 0.04, type: 'city' }, // SVSZ
    { lat: 9.089, lng: -62.094, city: 'TUCUPITA', size: 0.04, type: 'city' }, // SVTC
    { lat: 7.249, lng: -61.529, city: 'TUMEREMO', size: 0.04, type: 'city' }, // SVTM
    { lat: 10.158, lng: -67.927, city: 'ARTURO MICHELENA INTERNATIONAL', size: 0.04, type: 'city' }, // SVVA
    { lat: 8.624, lng: -71.673, city: 'JUAN PABLO PEREZ ALFONSO', size: 0.04, type: 'city' }, // SVVG
    { lat: 9.341, lng: -70.584, city: 'DR ANTONIO NICOLAS BRICENO', size: 0.04, type: 'city' }, // SVVL
    { lat: 9.222, lng: -65.993, city: 'VALLE DE LA PASCUA', size: 0.04, type: 'city' }, // SVVP
    { lat: 5.865, lng: -60.614, city: 'KAMARANG', size: 0.04, type: 'city' }, // SYKM
    { lat: 5.966, lng: -58.27, city: 'LINDEN', size: 0.04, type: 'city' }, // SYLD
    { lat: 3.373, lng: -59.789, city: 'LETHEM', size: 0.04, type: 'city' }, // SYLT
    { lat: 17.137, lng: -61.792, city: 'V C BIRD INTERNATIONAL', size: 0.04, type: 'city' }, // TAPA
    { lat: 13.074, lng: -59.492, city: 'GRANTLEY ADAMS INTERNATIONAL', size: 0.04, type: 'city' }, // TBPB
    { lat: 15.337, lng: -61.392, city: 'CANEFIELD', size: 0.04, type: 'city' }, // TDCF
    { lat: 15.547, lng: -61.3, city: 'MELVILLE HALL', size: 0.04, type: 'city' }, // TDPD
    { lat: 14.591, lng: -61.003, city: 'LE LAMENTIN', size: 0.04, type: 'city' }, // TFFF
    { lat: 18.1, lng: -63.047, city: 'GRAND CASE', size: 0.04, type: 'city' }, // TFFG
    { lat: 17.9, lng: -62.85, city: 'GUSTAVIA/ST.BARTHEL', size: 0.04, type: 'city' }, // TFFJ
    { lat: 15.869, lng: -61.27, city: 'MARIE GALANTE', size: 0.04, type: 'city' }, // TFFM
    { lat: 16.265, lng: -61.532, city: 'LE RAIZET', size: 0.04, type: 'city' }, // TFFR
    { lat: 12.004, lng: -61.786, city: 'POINT SALINES INTERNATIONAL', size: 0.04, type: 'city' }, // TGPY
    { lat: 18.337, lng: -64.973, city: 'CYRIL E KING', size: 0.04, type: 'city' }, // TIST
    { lat: 17.702, lng: -64.798, city: 'HENRY E ROHLSEN', size: 0.04, type: 'city' }, // TISX
    { lat: 18.495, lng: -67.129, city: 'RAFAEL HERNANDEZ', size: 0.04, type: 'city' }, // TJBQ
    { lat: 18.309, lng: -65.662, city: 'DIEGO JIMENEZ TORRES', size: 0.04, type: 'city' }, // TJFA
    { lat: 18.457, lng: -66.098, city: 'FERNANDO LUIS RIBAS DOMINICCI', size: 0.04, type: 'city' }, // TJIG
    { lat: 18.256, lng: -67.148, city: 'EUGENIO MARIA DE HOSTOS', size: 0.04, type: 'city' }, // TJMZ
    { lat: 18.245, lng: -65.643, city: 'ROOSEVELT ROADS NS', size: 0.04, type: 'city' }, // TJNR
    { lat: 18.008, lng: -66.563, city: 'MERCEDITA', size: 0.04, type: 'city' }, // TJPS
    { lat: 18.439, lng: -66.002, city: 'LUIS MUNOZ MARIN INTERNATIONAL', size: 0.04, type: 'city' }, // TJSJ
    { lat: 17.311, lng: -62.719, city: 'ROBERT L BRADSHAW', size: 0.04, type: 'city' }, // TKPK
    { lat: 17.206, lng: -62.59, city: 'VANCE WINKWORTH AMORY INTERNATIONAL', size: 0.04, type: 'city' }, // TKPN
    { lat: 14.02, lng: -60.993, city: 'GEORGE F L CHARLES', size: 0.04, type: 'city' }, // TLPC
    { lat: 13.733, lng: -60.953, city: 'HEWANORRA INTERNATIONAL', size: 0.04, type: 'city' }, // TLPL
    { lat: 12.501, lng: -70.015, city: 'REINA BEATRIX INTERNATIONAL', size: 0.04, type: 'city' }, // TNCA
    { lat: 12.131, lng: -68.268, city: 'FLAMINGO', size: 0.04, type: 'city' }, // TNCB
    { lat: 12.189, lng: -68.96, city: 'HATO', size: 0.04, type: 'city' }, // TNCC
    { lat: 17.496, lng: -62.979, city: 'F D ROOSEVELT', size: 0.04, type: 'city' }, // TNCE
    { lat: 18.041, lng: -63.109, city: 'PRINCESS JULIANA INTERNATIONAL', size: 0.04, type: 'city' }, // TNCM
    { lat: 18.205, lng: -63.055, city: 'WALLBLAKE', size: 0.04, type: 'city' }, // TQPF
    { lat: 33.587, lng: -80.209, city: 'SANTEE COOPER RGNL', size: 0.04, type: 'city' }, // TRPM
    { lat: 11.149, lng: -60.832, city: 'CROWN POINT', size: 0.04, type: 'city' }, // TTCP
    { lat: 10.595, lng: -61.337, city: 'PIARCO', size: 0.04, type: 'city' }, // TTPP
    { lat: 18.445, lng: -64.543, city: 'TERRANCE B LETTSOME INTERNATIONAL', size: 0.04, type: 'city' }, // TUPJ
    { lat: 12.988, lng: -61.262, city: 'J F MITCHELL', size: 0.04, type: 'city' }, // TVSB
    { lat: 12.699, lng: -61.342, city: 'CANOUAN', size: 0.04, type: 'city' }, // TVSC
    { lat: 12.887, lng: -61.18, city: 'MUSTIQUE', size: 0.04, type: 'city' }, // TVSM
    { lat: 13.144, lng: -61.211, city: 'E T JOSHUA', size: 0.04, type: 'city' }, // TVSV
    { lat: 43.352, lng: 77.04, city: 'ALMATY', size: 0.04, type: 'city' }, // UAAA
    { lat: 46.894, lng: 75.005, city: 'BALKHASH', size: 0.04, type: 'city' }, // UAAH
    { lat: 51.022, lng: 71.467, city: 'ASTANA', size: 0.04, type: 'city' }, // UACC
    { lat: 43.062, lng: 74.478, city: 'MANAS', size: 0.04, type: 'city' }, // UAFM
    { lat: 40.609, lng: 72.793, city: 'OSH', size: 0.04, type: 'city' }, // UAFO
    { lat: 42.364, lng: 69.479, city: 'SHYMKENT', size: 0.04, type: 'city' }, // UAII
    { lat: 47.708, lng: 67.733, city: 'ZHEZKAZGAN', size: 0.04, type: 'city' }, // UAKD
    { lat: 51.152, lng: 51.546, city: 'URALSK', size: 0.04, type: 'city' }, // UARR
    { lat: 50.351, lng: 80.234, city: 'SEMIPALATINSK', size: 0.04, type: 'city' }, // UASS
    { lat: 43.86, lng: 51.092, city: 'AKTAU', size: 0.04, type: 'city' }, // UATE
    { lat: 50.245, lng: 57.203, city: 'AKTYUBINSK', size: 0.04, type: 'city' }, // UATT
    { lat: 53.206, lng: 63.551, city: 'KOSTANAY', size: 0.04, type: 'city' }, // UAUU
    { lat: 40.468, lng: 50.047, city: 'BINA', size: 0.04, type: 'city' }, // UBBB
    { lat: 34.804, lng: -96.671, city: 'ADA MUNI', size: 0.04, type: 'city' }, // UEEA
    { lat: 62.093, lng: 129.771, city: 'YAKUTSK', size: 0.04, type: 'city' }, // UEEE
    { lat: 66.417, lng: 112.05, city: 'POLYARNY', size: 0.04, type: 'city' }, // UERP
    { lat: 40.148, lng: 44.397, city: 'ZVARTNOTS', size: 0.04, type: 'city' }, // UGEE
    { lat: 41.669, lng: 44.955, city: 'LOCHINI', size: 0.04, type: 'city' }, // UGGG
    { lat: 42.858, lng: 41.128, city: 'SUKHUMI DRANDA', size: 0.04, type: 'city' }, // UGSS
    { lat: 50.422, lng: 127.41, city: 'IGNATYEVO', size: 0.04, type: 'city' }, // UHBB
    { lat: 48.528, lng: 135.188, city: 'NOVY', size: 0.04, type: 'city' }, // UHHH
    { lat: 64.735, lng: 177.741, city: 'UGOLNY', size: 0.04, type: 'city' }, // UHMA
    { lat: 64.38, lng: -173.247, city: 'PROVIDENIYA BAY', size: 0.04, type: 'city' }, // UHMD
    { lat: 59.91, lng: 150.717, city: 'SOKOL', size: 0.04, type: 'city' }, // UHMM
    { lat: 67.5, lng: 171.0, city: 'PEVEK FIR', size: 0.04, type: 'city' }, // UHMP
    { lat: 53.166, lng: 158.453, city: 'YELIZOVO', size: 0.04, type: 'city' }, // UHPP
    { lat: 53.515, lng: 142.888, city: 'OKHA', size: 0.04, type: 'city' }, // UHSH
    { lat: 46.889, lng: 142.717, city: 'KHOMUTOVO', size: 0.04, type: 'city' }, // UHSS
    { lat: 43.399, lng: 132.151, city: 'KNEVICHI', size: 0.04, type: 'city' }, // UHWW
    { lat: 52.026, lng: 113.305, city: 'KADALA', size: 0.04, type: 'city' }, // UIAA
    { lat: 56.371, lng: 101.699, city: 'BRATSK', size: 0.04, type: 'city' }, // UIBB
    { lat: 52.267, lng: 104.395, city: 'IRKUTSK', size: 0.04, type: 'city' }, // UIII
    { lat: 51.807, lng: 107.438, city: 'MUKHINO', size: 0.04, type: 'city' }, // UIUU
    { lat: 50.345, lng: 30.895, city: 'BORYSPIL', size: 0.04, type: 'city' }, // UKBB
    { lat: 48.073, lng: 37.74, city: 'DONETSK', size: 0.04, type: 'city' }, // UKCC
    { lat: 48.357, lng: 35.102, city: 'DNIPROPETROVSK', size: 0.04, type: 'city' }, // UKDD
    { lat: 45.039, lng: 33.983, city: 'SIMFEROPOL', size: 0.04, type: 'city' }, // UKFF
    { lat: 49.359, lng: 26.934, city: 'KHMELNYTSKYI', size: 0.04, type: 'city' }, // UKHH
    { lat: 50.402, lng: 30.452, city: 'ZHULIANY', size: 0.04, type: 'city' }, // UKKK
    { lat: 49.813, lng: 23.956, city: 'LVIV', size: 0.04, type: 'city' }, // UKLL
    { lat: 48.26, lng: 25.982, city: 'CHERNIVTSI', size: 0.04, type: 'city' }, // UKLN
    { lat: 46.427, lng: 30.678, city: 'ODESA', size: 0.04, type: 'city' }, // UKOO
    { lat: 59.8, lng: 30.265, city: 'PULKOVO', size: 0.04, type: 'city' }, // ULLI
    { lat: 68.782, lng: 32.751, city: 'MURMANSK', size: 0.04, type: 'city' }, // ULMM
    { lat: 52.527, lng: 31.017, city: 'GOMEL', size: 0.04, type: 'city' }, // UMGG
    { lat: 55.167, lng: 30.133, city: 'VITEBSK', size: 0.04, type: 'city' }, // UMII
    { lat: 54.89, lng: 20.592, city: 'KHRABROVO', size: 0.04, type: 'city' }, // UMKK
    { lat: 53.864, lng: 27.539, city: 'MINSK 1', size: 0.04, type: 'city' }, // UMMM
    { lat: 53.882, lng: 28.031, city: 'MINSK 2', size: 0.04, type: 'city' }, // UMMS
    { lat: 53.74, lng: 91.385, city: 'ABAKAN', size: 0.04, type: 'city' }, // UNAA
    { lat: 53.364, lng: 83.542, city: 'BARNAUL', size: 0.04, type: 'city' }, // UNBB
    { lat: 55.27, lng: 86.107, city: 'KEMEROVO', size: 0.04, type: 'city' }, // UNEE
    { lat: 54.967, lng: 73.31, city: 'TSENTRALNY', size: 0.04, type: 'city' }, // UNOO
    { lat: 45.035, lng: 39.172, city: 'PASHKOVSKY', size: 0.04, type: 'city' }, // URKK
    { lat: 42.817, lng: 47.652, city: 'UYTASH', size: 0.04, type: 'city' }, // URML
    { lat: 44.225, lng: 43.082, city: 'MINERALNYYE VODY', size: 0.04, type: 'city' }, // URMM
    { lat: 45.109, lng: 42.113, city: 'SHPAKOVSKOYE', size: 0.04, type: 'city' }, // URMT
    { lat: 47.258, lng: 39.818, city: 'ROSTOV NA DONU', size: 0.04, type: 'city' }, // URRR
    { lat: 43.446, lng: 39.947, city: 'SOCHI', size: 0.04, type: 'city' }, // URSS
    { lat: 46.283, lng: 48.006, city: 'ASTRAKHAN', size: 0.04, type: 'city' }, // URWA
    { lat: 48.782, lng: 44.345, city: 'GUMRAK', size: 0.04, type: 'city' }, // URWW
    { lat: 55.303, lng: 61.507, city: 'BALANDINO', size: 0.04, type: 'city' }, // USCC
    { lat: 53.393, lng: 58.76, city: 'MAGNITOGORSK', size: 0.04, type: 'city' }, // USCM
    { lat: 66.59, lng: 66.61, city: 'SALEKHARD', size: 0.04, type: 'city' }, // USDD
    { lat: 60.95, lng: 76.467, city: 'NIZHNEVARTOVSK', size: 0.04, type: 'city' }, // USNN
    { lat: 57.917, lng: 56.026, city: 'BOLSHOYE SAVINO', size: 0.04, type: 'city' }, // USPP
    { lat: 61.25, lng: 73.5, city: 'SURGUT', size: 0.04, type: 'city' }, // USRR
    { lat: 56.741, lng: 60.804, city: 'KOLTSOVO', size: 0.04, type: 'city' }, // USSS
    { lat: 37.132, lng: -92.084, city: 'CABOOL MEM', size: 0.04, type: 'city' }, // USTO
    { lat: 55.475, lng: 65.415, city: 'KURGAN', size: 0.04, type: 'city' }, // USUU
    { lat: 37.992, lng: 58.363, city: 'ASHGABAT', size: 0.04, type: 'city' }, // UTAA
    { lat: 40.033, lng: 52.983, city: 'TURKMENBASHI AIRPORT', size: 0.04, type: 'city' }, // UTAK
    { lat: 39.083, lng: 63.613, city: 'TURKMENABAT', size: 0.04, type: 'city' }, // UTAV
    { lat: 38.543, lng: 68.825, city: 'DUSHANBE', size: 0.04, type: 'city' }, // UTDD
    { lat: 42.486, lng: 59.623, city: 'NUKUS', size: 0.04, type: 'city' }, // UTNN
    { lat: 39.775, lng: 64.48, city: 'BUKHARA', size: 0.04, type: 'city' }, // UTSB
    { lat: 39.701, lng: 66.985, city: 'SAMARKAND', size: 0.04, type: 'city' }, // UTSS
    { lat: 37.286, lng: 67.308, city: 'TERMEZ', size: 0.04, type: 'city' }, // UTST
    { lat: 41.257, lng: 69.282, city: 'YUZHNY', size: 0.04, type: 'city' }, // UTTT
    { lat: 53.214, lng: 34.176, city: 'BRYANSK', size: 0.04, type: 'city' }, // UUBP
    { lat: 55.972, lng: 37.415, city: 'SHEREMETYEVO', size: 0.04, type: 'city' }, // UUEE
    { lat: 56.825, lng: 35.758, city: 'MIGALOVO', size: 0.04, type: 'city' }, // UUEM
    { lat: 51.814, lng: 39.23, city: 'CHERTOVITSKOYE', size: 0.04, type: 'city' }, // UUOO
    { lat: 55.591, lng: 37.261, city: 'VNUKOVO', size: 0.04, type: 'city' }, // UUWW
    { lat: 61.648, lng: 50.846, city: 'SYKTYVKAR', size: 0.04, type: 'city' }, // UUYY
    { lat: 55.608, lng: 49.277, city: 'KAZAN', size: 0.04, type: 'city' }, // UWKD
    { lat: 51.796, lng: 55.457, city: 'ORENBURG', size: 0.04, type: 'city' }, // UWOO
    { lat: 28.954, lng: -98.52, city: 'PLEASANTON MUNI', size: 0.04, type: 'city' }, // UWPP
    { lat: 54.557, lng: 55.874, city: 'UFA', size: 0.04, type: 'city' }, // UWUU
    { lat: 53.505, lng: 50.164, city: 'KURUMOCH', size: 0.04, type: 'city' }, // UWWW
    { lat: 23.075, lng: 72.632, city: 'AHMEDABAD', size: 0.04, type: 'city' }, // VAAH
    { lat: 20.699, lng: 77.056, city: 'AKOLA', size: 0.04, type: 'city' }, // VAAK
    { lat: 19.863, lng: 75.398, city: 'AURANGABAD', size: 0.04, type: 'city' }, // VAAU
    { lat: 19.089, lng: 72.868, city: 'CHHATRAPATI SHIVAJI INTERNATIONAL', size: 0.04, type: 'city' }, // VABB
    { lat: 21.989, lng: 82.111, city: 'BILASPUR', size: 0.04, type: 'city' }, // VABI
    { lat: 23.288, lng: 69.67, city: 'BHUJ', size: 0.04, type: 'city' }, // VABJ
    { lat: 15.859, lng: 74.618, city: 'BELGAUM', size: 0.04, type: 'city' }, // VABM
    { lat: 22.336, lng: 73.226, city: 'VADODARA', size: 0.04, type: 'city' }, // VABO
    { lat: 23.285, lng: 77.337, city: 'BHOPAL', size: 0.04, type: 'city' }, // VABP
    { lat: 21.752, lng: 72.185, city: 'BHAVNAGAR', size: 0.04, type: 'city' }, // VABV
    { lat: 20.435, lng: 72.844, city: 'DAMAN', size: 0.04, type: 'city' }, // VADN
    { lat: 24.268, lng: 72.205, city: 'DEESA', size: 0.04, type: 'city' }, // VADS
    { lat: 15.381, lng: 73.833, city: 'GOA', size: 0.04, type: 'city' }, // VAGO
    { lat: 22.722, lng: 75.801, city: 'DEVI AHILYABAI HOLKAR', size: 0.04, type: 'city' }, // VAID
    { lat: 23.178, lng: 80.052, city: 'JABALPUR', size: 0.04, type: 'city' }, // VAJB
    { lat: 19.098, lng: 72.834, city: 'MUMBAI JUHU', size: 0.04, type: 'city' }, // VAJJ
    { lat: 22.466, lng: 70.011, city: 'JAMNAGAR', size: 0.04, type: 'city' }, // VAJM
    { lat: 23.113, lng: 70.1, city: 'KANDLA', size: 0.04, type: 'city' }, // VAKE
    { lat: 24.819, lng: 79.919, city: 'KHAJURAHO', size: 0.04, type: 'city' }, // VAKJ
    { lat: 16.664, lng: 74.288, city: 'KOLHAPUR', size: 0.04, type: 'city' }, // VAKP
    { lat: 21.317, lng: 70.27, city: 'KESHOD', size: 0.04, type: 'city' }, // VAKS
    { lat: 21.092, lng: 79.047, city: 'NAGPUR', size: 0.04, type: 'city' }, // VANP
    { lat: 19.962, lng: 73.807, city: 'NASIK ROAD', size: 0.04, type: 'city' }, // VANR
    { lat: 18.582, lng: 73.919, city: 'PUNE', size: 0.04, type: 'city' }, // VAPO
    { lat: 21.649, lng: 69.656, city: 'PORBANDAR', size: 0.04, type: 'city' }, // VAPR
    { lat: 22.309, lng: 70.779, city: 'RAJKOT', size: 0.04, type: 'city' }, // VARK
    { lat: 21.18, lng: 81.739, city: 'RAIPUR', size: 0.04, type: 'city' }, // VARP
    { lat: 17.628, lng: 75.935, city: 'SHOLAPUR', size: 0.04, type: 'city' }, // VASL
    { lat: 21.115, lng: 72.743, city: 'SURAT', size: 0.04, type: 'city' }, // VASU
    { lat: 24.617, lng: 73.913, city: 'UDAIPUR', size: 0.04, type: 'city' }, // VAUD
    { lat: 7.181, lng: 79.884, city: 'BANDARANAIKE INTERNATIONAL', size: 0.04, type: 'city' }, // VCBI
    { lat: 8.301, lng: 80.428, city: 'ANURADHAPURA', size: 0.04, type: 'city' }, // VCCA
    { lat: 7.706, lng: 81.678, city: 'BATTICALOA', size: 0.04, type: 'city' }, // VCCB
    { lat: 6.822, lng: 79.886, city: 'COLOMBO RATMALANA', size: 0.04, type: 'city' }, // VCCC
    { lat: 7.337, lng: 81.626, city: 'AMPARAI', size: 0.04, type: 'city' }, // VCCG
    { lat: 9.792, lng: 80.07, city: 'KANKESANTURAI', size: 0.04, type: 'city' }, // VCCJ
    { lat: 8.539, lng: 81.181, city: 'CHINA BAY', size: 0.04, type: 'city' }, // VCCT
    { lat: 6.254, lng: 81.235, city: 'WIRAWILA', size: 0.04, type: 'city' }, // VCCW
    { lat: 13.096, lng: 103.224, city: 'BATTAMBANG', size: 0.04, type: 'city' }, // VDBG
    { lat: 12.255, lng: 104.564, city: 'KAMPONG CHHNANG', size: 0.04, type: 'city' }, // VDKH
    { lat: 11.546, lng: 104.844, city: 'POCHENTONG INTERNATIONAL', size: 0.04, type: 'city' }, // VDPP
    { lat: 13.411, lng: 103.813, city: 'SIEM REAP', size: 0.04, type: 'city' }, // VDSR
    { lat: 13.531, lng: 106.014, city: 'STUNG TRENG', size: 0.04, type: 'city' }, // VDST
    { lat: 28.175, lng: 94.802, city: 'ALONG', size: 0.04, type: 'city' }, // VEAN
    { lat: 23.889, lng: 91.241, city: 'AGARTALA', size: 0.04, type: 'city' }, // VEAT
    { lat: 23.746, lng: 92.803, city: 'AIZAWL', size: 0.04, type: 'city' }, // VEAZ
    { lat: 26.681, lng: 88.328, city: 'BAGDOGRA', size: 0.04, type: 'city' }, // VEBD
    { lat: 25.261, lng: 88.796, city: 'BALURGHAT', size: 0.04, type: 'city' }, // VEBG
    { lat: 23.643, lng: 86.149, city: 'BOKARO', size: 0.04, type: 'city' }, // VEBK
    { lat: 20.244, lng: 85.818, city: 'BHUBANESHWAR', size: 0.04, type: 'city' }, // VEBS
    { lat: 22.655, lng: 88.447, city: 'NETAJI SUBHASH CHANDRA BOSE INTERNATIONAL', size: 0.04, type: 'city' }, // VECC
    { lat: 26.33, lng: 89.467, city: 'COOCH BEHAR', size: 0.04, type: 'city' }, // VECO
    { lat: 23.834, lng: 86.425, city: 'DHANBAD', size: 0.04, type: 'city' }, // VEDB
    { lat: 27.989, lng: 94.223, city: 'DAPARIJO', size: 0.04, type: 'city' }, // VEDZ
    { lat: 26.739, lng: 83.449, city: 'GORAKHPUR', size: 0.04, type: 'city' }, // VEGK
    { lat: 26.106, lng: 91.585, city: 'GUWAHATI INTERNATIONAL', size: 0.04, type: 'city' }, // VEGT
    { lat: 24.748, lng: 84.943, city: 'GAYA', size: 0.04, type: 'city' }, // VEGY
    { lat: 21.579, lng: 84.006, city: 'HIRAKUD', size: 0.04, type: 'city' }, // VEHK
    { lat: 24.76, lng: 93.897, city: 'IMPHAL', size: 0.04, type: 'city' }, // VEIM
    { lat: 21.913, lng: 84.05, city: 'JHARSUGUDA', size: 0.04, type: 'city' }, // VEJH
    { lat: 18.88, lng: 82.552, city: 'JEYPORE', size: 0.04, type: 'city' }, // VEJP
    { lat: 22.812, lng: 86.168, city: 'JAMSHEDPUR', size: 0.04, type: 'city' }, // VEJS
    { lat: 26.731, lng: 94.176, city: 'JORHAT', size: 0.04, type: 'city' }, // VEJT
    { lat: 24.135, lng: 91.811, city: 'KAMALPUR', size: 0.04, type: 'city' }, // VEKM
    { lat: 24.308, lng: 92.007, city: 'KAILASHAHAR', size: 0.04, type: 'city' }, // VEKR
    { lat: 24.913, lng: 92.979, city: 'SILCHAR', size: 0.04, type: 'city' }, // VEKU
    { lat: 27.291, lng: 94.097, city: 'LILABARI', size: 0.04, type: 'city' }, // VELR
    { lat: 27.483, lng: 95.017, city: 'DIBRUGARH', size: 0.04, type: 'city' }, // VEMN
    { lat: 26.12, lng: 85.313, city: 'MUZAFFARPUR', size: 0.04, type: 'city' }, // VEMZ
    { lat: 20.87, lng: 82.519, city: 'NAWAPARA', size: 0.04, type: 'city' }, // VENP
    { lat: 28.066, lng: 95.336, city: 'PASIGHAT', size: 0.04, type: 'city' }, // VEPG
    { lat: 23.474, lng: 87.428, city: 'PANAGARH', size: 0.04, type: 'city' }, // VEPH
    { lat: 25.591, lng: 85.088, city: 'PATNA', size: 0.04, type: 'city' }, // VEPT
    { lat: 25.76, lng: 87.409, city: 'PURNEA', size: 0.04, type: 'city' }, // VEPU
    { lat: 23.315, lng: 85.321, city: 'BIRSA MUNDA', size: 0.04, type: 'city' }, // VERC
    { lat: 22.256, lng: 84.814, city: 'ROURKELA', size: 0.04, type: 'city' }, // VERK
    { lat: 20.098, lng: 83.183, city: 'UTKELA', size: 0.04, type: 'city' }, // VEUK
    { lat: 27.588, lng: 93.828, city: 'ZERO', size: 0.04, type: 'city' }, // VEZO
    { lat: 21.452, lng: 91.964, city: 'COXS BAZAR', size: 0.04, type: 'city' }, // VGCB
    { lat: 22.249, lng: 91.813, city: 'SHAH AMANAT INTERNATIONAL', size: 0.04, type: 'city' }, // VGEG
    { lat: 24.152, lng: 89.049, city: 'ISHURDI', size: 0.04, type: 'city' }, // VGIS
    { lat: 23.184, lng: 89.161, city: 'JESSORE', size: 0.04, type: 'city' }, // VGJR
    { lat: 24.437, lng: 88.616, city: 'RAJSHAHI', size: 0.04, type: 'city' }, // VGRJ
    { lat: 25.759, lng: 88.909, city: 'SAIDPUR', size: 0.04, type: 'city' }, // VGSD
    { lat: 24.963, lng: 91.867, city: 'OSMANY INTERNATIONAL', size: 0.04, type: 'city' }, // VGSY
    { lat: 23.778, lng: 90.382, city: 'BASHER', size: 0.04, type: 'city' }, // VGTJ
    { lat: 23.843, lng: 90.398, city: 'ZIA INTERNATIONAL', size: 0.04, type: 'city' }, // VGZR
    { lat: 22.309, lng: 113.914, city: 'HONG KONG INTERNATIONAL', size: 0.04, type: 'city' }, // VHHH
    { lat: 22.436, lng: 114.08, city: 'SEK KONG', size: 0.04, type: 'city' }, // VHSK
    { lat: 27.156, lng: 77.961, city: 'AGRA', size: 0.04, type: 'city' }, // VIAG
    { lat: 25.439, lng: 81.734, city: 'ALLAHABAD', size: 0.04, type: 'city' }, // VIAL
    { lat: 31.707, lng: 74.799, city: 'AMRITSAR', size: 0.04, type: 'city' }, // VIAR
    { lat: 28.072, lng: 73.207, city: 'NAL', size: 0.04, type: 'city' }, // VIBK
    { lat: 26.988, lng: 80.893, city: 'BAKSHI KA TALAB', size: 0.04, type: 'city' }, // VIBL
    { lat: 25.452, lng: 82.859, city: 'VARANASI', size: 0.04, type: 'city' }, // VIBN
    { lat: 31.882, lng: 77.184, city: 'KULLU MANALI', size: 0.04, type: 'city' }, // VIBR
    { lat: 30.27, lng: 74.756, city: 'BHATINDA', size: 0.04, type: 'city' }, // VIBT
    { lat: 28.837, lng: 76.178, city: 'BHIWANI', size: 0.04, type: 'city' }, // VIBW
    { lat: 28.422, lng: 79.45, city: 'BAREILLY', size: 0.04, type: 'city' }, // VIBY
    { lat: 30.673, lng: 76.788, city: 'CHANDIGARH', size: 0.04, type: 'city' }, // VICG
    { lat: 26.404, lng: 80.41, city: 'KANPUR CHAKERI', size: 0.04, type: 'city' }, // VICX
    { lat: 28.584, lng: 77.205, city: 'SAFDARJUNG', size: 0.04, type: 'city' }, // VIDD
    { lat: 30.187, lng: 78.18, city: 'DEHRADUN', size: 0.04, type: 'city' }, // VIDN
    { lat: 28.566, lng: 77.103, city: 'INDIRA GANDHI INTERNATIONAL', size: 0.04, type: 'city' }, // VIDP
    { lat: 24.654, lng: 77.347, city: 'GUNA', size: 0.04, type: 'city' }, // VIGN
    { lat: 26.294, lng: 78.228, city: 'GWALIOR', size: 0.04, type: 'city' }, // VIGR
    { lat: 29.181, lng: 75.753, city: 'HISSAR', size: 0.04, type: 'city' }, // VIHR
    { lat: 25.49, lng: 78.559, city: 'JHANSI', size: 0.04, type: 'city' }, // VIJN
    { lat: 26.251, lng: 73.048, city: 'JODHPUR', size: 0.04, type: 'city' }, // VIJO
    { lat: 26.824, lng: 75.81, city: 'JAIPUR', size: 0.04, type: 'city' }, // VIJP
    { lat: 26.889, lng: 70.864, city: 'JAISALMER', size: 0.04, type: 'city' }, // VIJR
    { lat: 32.69, lng: 74.838, city: 'JAMMU', size: 0.04, type: 'city' }, // VIJU
    { lat: 26.441, lng: 80.363, city: 'KANPUR', size: 0.04, type: 'city' }, // VIKA
    { lat: 25.161, lng: 75.845, city: 'KOTA', size: 0.04, type: 'city' }, // VIKO
    { lat: 30.854, lng: 75.951, city: 'LUDHIANA', size: 0.04, type: 'city' }, // VILD
    { lat: 34.136, lng: 77.546, city: 'LEH', size: 0.04, type: 'city' }, // VILH
    { lat: 26.761, lng: 80.886, city: 'LUCKNOW', size: 0.04, type: 'city' }, // VILK
    { lat: 32.234, lng: 75.634, city: 'PATHANKOT', size: 0.04, type: 'city' }, // VIPK
    { lat: 30.315, lng: 76.363, city: 'PATIALA', size: 0.04, type: 'city' }, // VIPL
    { lat: 29.033, lng: 79.474, city: 'PANTNAGAR', size: 0.04, type: 'city' }, // VIPT
    { lat: 26.25, lng: 81.381, city: 'FURSATGANJ', size: 0.04, type: 'city' }, // VIRB
    { lat: 31.082, lng: 77.058, city: 'SHIMLA', size: 0.04, type: 'city' }, // VISM
    { lat: 29.994, lng: 77.424, city: 'SARSAWA', size: 0.04, type: 'city' }, // VISP
    { lat: 33.987, lng: 74.774, city: 'SRINAGAR', size: 0.04, type: 'city' }, // VISR
    { lat: 20.257, lng: 100.437, city: 'BAN HUOEISAY', size: 0.04, type: 'city' }, // VLHS
    { lat: 19.897, lng: 102.161, city: 'LUANG PRABANG', size: 0.04, type: 'city' }, // VLLB
    { lat: 15.132, lng: 105.781, city: 'PAKSE', size: 0.04, type: 'city' }, // VLPS
    { lat: 19.455, lng: 103.218, city: 'PHONESAVANH', size: 0.04, type: 'city' }, // VLPV
    { lat: 16.556, lng: 104.759, city: 'SAVANNAKHET', size: 0.04, type: 'city' }, // VLSK
    { lat: 17.988, lng: 102.563, city: 'WATTAY INTERNATIONAL', size: 0.04, type: 'city' }, // VLVT
    { lat: 22.149, lng: 113.591, city: 'MACAU INTERNATIONAL', size: 0.04, type: 'city' }, // VMMC
    { lat: 27.506, lng: 83.416, city: 'BHAIRAHAWA', size: 0.04, type: 'city' }, // VNBW
    { lat: 26.571, lng: 88.079, city: 'CHANDRAGADHI', size: 0.04, type: 'city' }, // VNCG
    { lat: 26.709, lng: 85.922, city: 'JANAKPUR', size: 0.04, type: 'city' }, // VNJP
    { lat: 27.696, lng: 85.359, city: 'TRIBHUVAN INTERNATIONAL', size: 0.04, type: 'city' }, // VNKT
    { lat: 28.104, lng: 81.667, city: 'NEPALGUNJ', size: 0.04, type: 'city' }, // VNNG
    { lat: 28.2, lng: 83.981, city: 'POKHARA', size: 0.04, type: 'city' }, // VNPK
    { lat: 27.159, lng: 84.98, city: 'SIMARA', size: 0.04, type: 'city' }, // VNSI
    { lat: 26.483, lng: 87.264, city: 'BIRATNAGAR', size: 0.04, type: 'city' }, // VNVT
    { lat: 10.823, lng: 72.176, city: 'AGATTI', size: 0.04, type: 'city' }, // VOAT
    { lat: 12.95, lng: 77.668, city: 'BANGALORE', size: 0.04, type: 'city' }, // VOBG
    { lat: 17.908, lng: 77.486, city: 'BIDAR', size: 0.04, type: 'city' }, // VOBR
    { lat: 16.53, lng: 80.797, city: 'VIJAYAWADA', size: 0.04, type: 'city' }, // VOBZ
    { lat: 11.031, lng: 77.044, city: 'COIMBATORE', size: 0.04, type: 'city' }, // VOCB
    { lat: 11.136, lng: 75.955, city: 'CALICUT', size: 0.04, type: 'city' }, // VOCL
    { lat: 14.51, lng: 78.773, city: 'CUDDAPAH', size: 0.04, type: 'city' }, // VOCP
    { lat: 9.153, lng: 92.819, city: 'CARNICOBAR', size: 0.04, type: 'city' }, // VOCX
    { lat: 17.629, lng: 78.403, city: 'DUNDIGUL', size: 0.04, type: 'city' }, // VODG
    { lat: 17.452, lng: 78.461, city: 'HYDERABAD', size: 0.04, type: 'city' }, // VOHY
    { lat: 9.834, lng: 78.093, city: 'MADURAI', size: 0.04, type: 'city' }, // VOMD
    { lat: 12.96, lng: 74.893, city: 'MANGALORE', size: 0.04, type: 'city' }, // VOML
    { lat: 12.994, lng: 80.18, city: 'CHENNAI INTERNATIONAL', size: 0.04, type: 'city' }, // VOMM
    { lat: 16.541, lng: 79.318, city: 'NAGARJUNA SAGAR', size: 0.04, type: 'city' }, // VONS
    { lat: 11.646, lng: 92.733, city: 'PORT BLAIR', size: 0.04, type: 'city' }, // VOPB
    { lat: 17.109, lng: 81.818, city: 'RAJAHMUNDRY', size: 0.04, type: 'city' }, // VORY
    { lat: 11.782, lng: 78.065, city: 'SALEM', size: 0.04, type: 'city' }, // VOSM
    { lat: 10.72, lng: 79.104, city: 'TANJORE', size: 0.04, type: 'city' }, // VOTJ
    { lat: 13.632, lng: 79.543, city: 'TIRUPATI', size: 0.04, type: 'city' }, // VOTP
    { lat: 10.765, lng: 78.709, city: 'TIRUCHIRAPPALLI', size: 0.04, type: 'city' }, // VOTR
    { lat: 8.482, lng: 76.918, city: 'THIRUVANANTHAPURAM INTERNATIONAL', size: 0.04, type: 'city' }, // VOTV
    { lat: 12.907, lng: 80.121, city: 'TAMBARAM', size: 0.04, type: 'city' }, // VOTX
    { lat: 17.918, lng: 79.599, city: 'WARANGAL', size: 0.04, type: 'city' }, // VOWA
    { lat: 27.403, lng: 89.426, city: 'PARO', size: 0.04, type: 'city' }, // VQPR
    { lat: 4.192, lng: 73.529, city: 'MALE INTERNATIONAL', size: 0.04, type: 'city' }, // VRMM
    { lat: 13.912, lng: 100.607, city: 'BANGKOK INTERNATIONAL', size: 0.04, type: 'city' }, // VTBD
    { lat: 14.102, lng: 99.917, city: 'KAMPHAENG SAEN', size: 0.04, type: 'city' }, // VTBK
    { lat: 14.874, lng: 100.663, city: 'KHOK KATHIAM', size: 0.04, type: 'city' }, // VTBL
    { lat: 12.68, lng: 101.005, city: 'U TAPHAO INTERNATIONAL', size: 0.04, type: 'city' }, // VTBU
    { lat: 13.769, lng: 102.315, city: 'WATTHANA NAKHON', size: 0.04, type: 'city' }, // VTBW
    { lat: 19.497, lng: 100.286, city: 'CHIANG KHAM', size: 0.04, type: 'city' }, // VTCB
    { lat: 18.272, lng: 99.504, city: 'LAMPANG', size: 0.04, type: 'city' }, // VTCL
    { lat: 18.132, lng: 100.164, city: 'PHRAE', size: 0.04, type: 'city' }, // VTCP
    { lat: 12.634, lng: 99.951, city: 'HUA HIN', size: 0.04, type: 'city' }, // VTPH
    { lat: 15.277, lng: 100.296, city: 'TAKHLI', size: 0.04, type: 'city' }, // VTPI
    { lat: 16.821, lng: 101.254, city: 'LOM SAK', size: 0.04, type: 'city' }, // VTPL
    { lat: 16.7, lng: 98.545, city: 'MAE SOT', size: 0.04, type: 'city' }, // VTPM
    { lat: 15.673, lng: 100.137, city: 'NAKHON SAWAN', size: 0.04, type: 'city' }, // VTPN
    { lat: 16.783, lng: 100.279, city: 'PHITSANULOK', size: 0.04, type: 'city' }, // VTPP
    { lat: 17.674, lng: 100.235, city: 'UTTARADIT', size: 0.04, type: 'city' }, // VTPU
    { lat: 17.234, lng: 99.058, city: 'KHUAN PHUMIPHON', size: 0.04, type: 'city' }, // VTPY
    { lat: 6.52, lng: 101.743, city: 'NARATHIWAT', size: 0.04, type: 'city' }, // VTSC
    { lat: 8.099, lng: 98.986, city: 'KRABI', size: 0.04, type: 'city' }, // VTSG
    { lat: 7.186, lng: 100.608, city: 'SONGKHLA', size: 0.04, type: 'city' }, // VTSH
    { lat: 6.785, lng: 101.153, city: 'PATTANI', size: 0.04, type: 'city' }, // VTSK
    { lat: 9.548, lng: 100.062, city: 'SAMUI', size: 0.04, type: 'city' }, // VTSM
    { lat: 8.471, lng: 99.956, city: 'CHA IAN', size: 0.04, type: 'city' }, // VTSN
    { lat: 8.113, lng: 98.317, city: 'PHUKET INTERNATIONAL', size: 0.04, type: 'city' }, // VTSP
    { lat: 9.778, lng: 98.585, city: 'RANONG', size: 0.04, type: 'city' }, // VTSR
    { lat: 6.933, lng: 100.393, city: 'HAT YAI INTERNATIONAL', size: 0.04, type: 'city' }, // VTSS
    { lat: 7.509, lng: 99.616, city: 'TRANG', size: 0.04, type: 'city' }, // VTST
    { lat: 6.527, lng: 101.242, city: 'YALA', size: 0.04, type: 'city' }, // VTSY
    { lat: 17.386, lng: 102.788, city: 'UDON THANI', size: 0.04, type: 'city' }, // VTUD
    { lat: 17.195, lng: 104.119, city: 'SAKON NAKHON', size: 0.04, type: 'city' }, // VTUI
    { lat: 14.869, lng: 103.489, city: 'SURIN', size: 0.04, type: 'city' }, // VTUJ
    { lat: 17.439, lng: 101.722, city: 'LOEI', size: 0.04, type: 'city' }, // VTUL
    { lat: 14.934, lng: 102.079, city: 'KHORAT', size: 0.04, type: 'city' }, // VTUN
    { lat: 17.412, lng: 104.777, city: 'NAKHON PHANOM', size: 0.04, type: 'city' }, // VTUP
    { lat: 17.384, lng: 104.643, city: 'NAKHON PHANOM', size: 0.04, type: 'city' }, // VTUW
    { lat: 16.044, lng: 108.199, city: 'DANANG INTERNATIONAL', size: 0.04, type: 'city' }, // VVDN
    { lat: 21.222, lng: 105.806, city: 'NOIBAI INTERNATIONAL', size: 0.04, type: 'city' }, // VVNB
    { lat: 12.218, lng: 109.2, city: 'NHA TRANG AIRPORT', size: 0.04, type: 'city' }, // VVNT
    { lat: 10.82, lng: 106.662, city: 'TANSONNHAT INTERNATIONAL', size: 0.04, type: 'city' }, // VVTS
    { lat: 21.182, lng: 94.929, city: 'BAGAN', size: 0.04, type: 'city' }, // VYBG
    { lat: 24.269, lng: 97.246, city: 'BANMAW', size: 0.04, type: 'city' }, // VYBM
    { lat: 14.141, lng: 93.368, city: 'COCO ISLAND', size: 0.04, type: 'city' }, // VYCI
    { lat: 14.098, lng: 98.202, city: 'DAWEI', size: 0.04, type: 'city' }, // VYDW
    { lat: 20.743, lng: 96.792, city: 'HEHO', size: 0.04, type: 'city' }, // VYHH
    { lat: 21.301, lng: 99.637, city: 'KENGTUNG', size: 0.04, type: 'city' }, // VYKG
    { lat: 23.189, lng: 94.051, city: 'KALAY', size: 0.04, type: 'city' }, // VYKL
    { lat: 19.427, lng: 93.534, city: 'KYAUKPYU', size: 0.04, type: 'city' }, // VYKP
    { lat: 10.049, lng: 98.538, city: 'KAWTHOUNG', size: 0.04, type: 'city' }, // VYKT
    { lat: 19.692, lng: 97.215, city: 'LOIKAW', size: 0.04, type: 'city' }, // VYLK
    { lat: 22.977, lng: 97.752, city: 'LASHIO', size: 0.04, type: 'city' }, // VYLS
    { lat: 20.94, lng: 94.822, city: 'LANYWA', size: 0.04, type: 'city' }, // VYLY
    { lat: 21.702, lng: 95.978, city: 'MANDALAY INTERNATIONAL', size: 0.04, type: 'city' }, // VYMD
    { lat: 12.443, lng: 98.621, city: 'MYEIK', size: 0.04, type: 'city' }, // VYME
    { lat: 25.383, lng: 97.353, city: 'MYITKYINA', size: 0.04, type: 'city' }, // VYMK
    { lat: 16.445, lng: 97.661, city: 'MAWLAMYINE', size: 0.04, type: 'city' }, // VYMM
    { lat: 23.092, lng: 96.645, city: 'MOMEIK', size: 0.04, type: 'city' }, // VYMO
    { lat: 20.517, lng: 99.257, city: 'MONGHSAT', size: 0.04, type: 'city' }, // VYMS
    { lat: 25.354, lng: 97.295, city: 'NAMPONG', size: 0.04, type: 'city' }, // VYNP
    { lat: 20.89, lng: 97.736, city: 'NAMSANG', size: 0.04, type: 'city' }, // VYNS
    { lat: 16.894, lng: 97.675, city: 'HPA AN', size: 0.04, type: 'city' }, // VYPA
    { lat: 16.813, lng: 94.775, city: 'PATHEIN', size: 0.04, type: 'city' }, // VYPN
    { lat: 27.33, lng: 97.426, city: 'PUTAO', size: 0.04, type: 'city' }, // VYPT
    { lat: 18.824, lng: 95.266, city: 'PYAY', size: 0.04, type: 'city' }, // VYPY
    { lat: 20.942, lng: 95.914, city: 'SHANTE', size: 0.04, type: 'city' }, // VYST
    { lat: 20.133, lng: 92.872, city: 'SITTWE', size: 0.04, type: 'city' }, // VYSW
    { lat: 18.461, lng: 94.299, city: 'THANDWE', size: 0.04, type: 'city' }, // VYTD
    { lat: 20.484, lng: 99.935, city: 'TACHILEK', size: 0.04, type: 'city' }, // VYTL
    { lat: 19.031, lng: 96.401, city: 'TAUNGOO', size: 0.04, type: 'city' }, // VYTO
    { lat: 16.907, lng: 96.133, city: 'YANGON INTERNATIONAL', size: 0.04, type: 'city' }, // VYYY
    { lat: -5.062, lng: 119.554, city: 'HASANUDDIN', size: 0.04, type: 'city' }, // WAAA
    { lat: -4.317, lng: 122.467, city: 'PONGGALUKU', size: 0.04, type: 'city' }, // WAAL
    { lat: -2.558, lng: 120.324, city: 'ANDI JEMMA', size: 0.04, type: 'city' }, // WAAM
    { lat: -2.529, lng: 121.357, city: 'SOROAKO', size: 0.04, type: 'city' }, // WAAS
    { lat: -3.045, lng: 119.822, city: 'PONGTIKU', size: 0.04, type: 'city' }, // WAAT
    { lat: -4.082, lng: 122.417, city: 'WOLTER MONGINSIDI', size: 0.04, type: 'city' }, // WAAU
    { lat: -1.19, lng: 136.108, city: 'FRANS KAISIEPO', size: 0.04, type: 'city' }, // WABB
    { lat: -3.368, lng: 135.496, city: 'NABIRE', size: 0.04, type: 'city' }, // WABI
    { lat: -4.528, lng: 136.887, city: 'MOSES KILANGIN', size: 0.04, type: 'city' }, // WABP
    { lat: -2.577, lng: 140.516, city: 'SENTANI', size: 0.04, type: 'city' }, // WAJJ
    { lat: -4.096, lng: 138.952, city: 'WAMENA', size: 0.04, type: 'city' }, // WAJW
    { lat: -8.52, lng: 140.418, city: 'MOPAH', size: 0.04, type: 'city' }, // WAKK
    { lat: 0.637, lng: 122.852, city: 'JALALUDDIN', size: 0.04, type: 'city' }, // WAMG
    { lat: 3.683, lng: 125.528, city: 'NAHA', size: 0.04, type: 'city' }, // WAMH
    { lat: -0.918, lng: 119.909, city: 'MUTIARA', size: 0.04, type: 'city' }, // WAML
    { lat: 1.549, lng: 124.926, city: 'SAM RATULANGI', size: 0.04, type: 'city' }, // WAMM
    { lat: -1.417, lng: 120.657, city: 'KASIGUNCU', size: 0.04, type: 'city' }, // WAMP
    { lat: 0.832, lng: 127.381, city: 'BABULLAH', size: 0.04, type: 'city' }, // WAMT
    { lat: -1.039, lng: 122.772, city: 'BUBUNG', size: 0.04, type: 'city' }, // WAMW
    { lat: -5.661, lng: 132.731, city: 'DUMATUBIN', size: 0.04, type: 'city' }, // WAPL
    { lat: -3.709, lng: 128.09, city: 'PATTIMURA', size: 0.04, type: 'city' }, // WAPP
    { lat: -3.644, lng: 133.695, city: 'KAIMANA', size: 0.04, type: 'city' }, // WASK
    { lat: -0.88, lng: 134.05, city: 'RENDANI', size: 0.04, type: 'city' }, // WASR
    { lat: -0.926, lng: 131.12, city: 'JEFMAN', size: 0.04, type: 'city' }, // WASS
    { lat: 3.172, lng: 113.044, city: 'BINTULU', size: 0.04, type: 'city' }, // WBGB
    { lat: 1.485, lng: 110.346, city: 'KUCHING INTERNATIONAL', size: 0.04, type: 'city' }, // WBGG
    { lat: 4.178, lng: 114.331, city: 'MARUDI', size: 0.04, type: 'city' }, // WBGM
    { lat: 4.325, lng: 113.988, city: 'MIRI', size: 0.04, type: 'city' }, // WBGR
    { lat: 2.264, lng: 111.983, city: 'SIBU', size: 0.04, type: 'city' }, // WBGS
    { lat: 5.032, lng: 118.324, city: 'LAHAD DATU', size: 0.04, type: 'city' }, // WBKD
    { lat: 5.937, lng: 116.051, city: 'KOTA KINABALU INTERNATIONAL', size: 0.04, type: 'city' }, // WBKK
    { lat: 5.301, lng: 115.25, city: 'LABUAN', size: 0.04, type: 'city' }, // WBKL
    { lat: 4.313, lng: 118.122, city: 'TAWAU', size: 0.04, type: 'city' }, // WBKW
    { lat: 4.946, lng: 114.928, city: 'BRUNEI INTERNATIONAL', size: 0.04, type: 'city' }, // WBSB
    { lat: 5.874, lng: 95.339, city: 'MAIMUN SALEH', size: 0.04, type: 'city' }, // WIAA
    { lat: -7.346, lng: 108.246, city: 'CIBEUREUM', size: 0.04, type: 'city' }, // WIAM
    { lat: -7.616, lng: 111.434, city: 'ISWAHYUDI', size: 0.04, type: 'city' }, // WIAR
    { lat: -7.926, lng: 112.714, city: 'ABDUL RACHMAN SALEH', size: 0.04, type: 'city' }, // WIAS
    { lat: 0.461, lng: 101.444, city: 'SULTAN SYARIF KASIM II', size: 0.04, type: 'city' }, // WIBB
    { lat: 1.609, lng: 101.433, city: 'PINANG KAMPAI', size: 0.04, type: 'city' }, // WIBD
    { lat: -6.293, lng: 106.57, city: 'BUDIARTO', size: 0.04, type: 'city' }, // WIIA
    { lat: -6.901, lng: 107.576, city: 'HUSEIN SASTRANEGARA', size: 0.04, type: 'city' }, // WIIB
    { lat: -6.756, lng: 108.539, city: 'PENGGUNG', size: 0.04, type: 'city' }, // WIIC
    { lat: -6.266, lng: 106.891, city: 'HALIM PERDANAKUSUMA INTERNATIONAL', size: 0.04, type: 'city' }, // WIIH
    { lat: -6.126, lng: 106.656, city: 'SOEKARNO HATTA INTERNATIONAL', size: 0.04, type: 'city' }, // WIII
    { lat: -7.788, lng: 110.432, city: 'ADI SUTJIPTO', size: 0.04, type: 'city' }, // WIIJ
    { lat: -7.645, lng: 109.034, city: 'TUNGGUL WULUNG', size: 0.04, type: 'city' }, // WIIL
    { lat: -6.337, lng: 106.764, city: 'PONDOK CABE', size: 0.04, type: 'city' }, // WIIP
    { lat: -6.973, lng: 110.375, city: 'ACHMAD YANI', size: 0.04, type: 'city' }, // WIIS
    { lat: -5.242, lng: 105.179, city: 'RADIN INTEN II', size: 0.04, type: 'city' }, // WIIT
    { lat: 1.121, lng: 104.119, city: 'HANG NADIM', size: 0.04, type: 'city' }, // WIKB
    { lat: -2.746, lng: 107.755, city: 'H AS HANANDJOEDDIN', size: 0.04, type: 'city' }, // WIKD
    { lat: -2.163, lng: 106.139, city: 'DEPATI AMIR', size: 0.04, type: 'city' }, // WIKK
    { lat: 0.922, lng: 104.532, city: 'KIJANG', size: 0.04, type: 'city' }, // WIKN
    { lat: -0.479, lng: 104.579, city: 'DABO', size: 0.04, type: 'city' }, // WIKS
    { lat: 1.166, lng: 97.703, city: 'BINAKA', size: 0.04, type: 'city' }, // WIMB
    { lat: 1.399, lng: 99.432, city: 'AEK GODANG', size: 0.04, type: 'city' }, // WIME
    { lat: -0.876, lng: 100.352, city: 'TABING', size: 0.04, type: 'city' }, // WIMG
    { lat: 3.558, lng: 98.672, city: 'POLONIA', size: 0.04, type: 'city' }, // WIMM
    { lat: 1.555, lng: 98.89, city: 'PINANG SORE', size: 0.04, type: 'city' }, // WIMS
    { lat: -0.349, lng: 111.748, city: 'NANGA PINOH I', size: 0.04, type: 'city' }, // WIOG
    { lat: -1.816, lng: 109.963, city: 'RAHADI USMAN', size: 0.04, type: 'city' }, // WIOK
    { lat: 3.909, lng: 108.388, city: 'RANAI', size: 0.04, type: 'city' }, // WION
    { lat: -0.151, lng: 109.404, city: 'SUPADIO', size: 0.04, type: 'city' }, // WIOO
    { lat: 0.836, lng: 112.936, city: 'PANGSUMA', size: 0.04, type: 'city' }, // WIOP
    { lat: 0.064, lng: 111.475, city: 'SUSILO', size: 0.04, type: 'city' }, // WIOS
    { lat: -1.638, lng: 103.644, city: 'SULTAN THAHA', size: 0.04, type: 'city' }, // WIPA
    { lat: -3.864, lng: 102.341, city: 'PADANG KEMILING', size: 0.04, type: 'city' }, // WIPL
    { lat: -2.898, lng: 104.701, city: 'SULTAN MAHMUD BADARUDDIN II', size: 0.04, type: 'city' }, // WIPP
    { lat: -3.286, lng: 103.879, city: 'PENDOPO', size: 0.04, type: 'city' }, // WIPQ
    { lat: -0.353, lng: 102.335, city: 'JAPURA', size: 0.04, type: 'city' }, // WIPR
    { lat: -2.542, lng: 101.088, city: 'MUKO MUKO', size: 0.04, type: 'city' }, // WIPU
    { lat: 5.069, lng: 97.259, city: 'LHOK SUKON', size: 0.04, type: 'city' }, // WITL
    { lat: 5.227, lng: 96.95, city: 'MALIKUS SALEH', size: 0.04, type: 'city' }, // WITM
    { lat: 5.523, lng: 95.42, city: 'SULTAN ISKANDARMUDA', size: 0.04, type: 'city' }, // WITT
    { lat: 2.041, lng: 103.307, city: 'KLUANG', size: 0.04, type: 'city' }, // WMAP
    { lat: 2.818, lng: 104.16, city: 'PULAU TIOMAN', size: 0.04, type: 'city' }, // WMBT
    { lat: 6.194, lng: 100.403, city: 'SULTAN ABDUL HALIM', size: 0.04, type: 'city' }, // WMKA
    { lat: 5.466, lng: 100.391, city: 'BUTTERWORTH', size: 0.04, type: 'city' }, // WMKB
    { lat: 6.166, lng: 102.294, city: 'SULTAN ISMAIL PETRA', size: 0.04, type: 'city' }, // WMKC
    { lat: 3.775, lng: 103.209, city: 'KUANTAN', size: 0.04, type: 'city' }, // WMKD
    { lat: 4.537, lng: 103.426, city: 'KERTEH', size: 0.04, type: 'city' }, // WMKE
    { lat: 3.112, lng: 101.703, city: 'KUALA LUMPUR', size: 0.04, type: 'city' }, // WMKF
    { lat: 4.568, lng: 101.092, city: 'SULTAN AZLAN SHAH', size: 0.04, type: 'city' }, // WMKI
    { lat: 1.641, lng: 103.669, city: 'SULTAN ISMAIL', size: 0.04, type: 'city' }, // WMKJ
    { lat: 2.746, lng: 101.71, city: 'KUALA LUMPUR INTERNATIONAL', size: 0.04, type: 'city' }, // WMKK
    { lat: 6.33, lng: 99.729, city: 'LANGKAWI INTERNATIONAL', size: 0.04, type: 'city' }, // WMKL
    { lat: 2.263, lng: 102.251, city: 'MALACCA', size: 0.04, type: 'city' }, // WMKM
    { lat: 5.382, lng: 103.103, city: 'SULTAN MAHMUD', size: 0.04, type: 'city' }, // WMKN
    { lat: 5.297, lng: 100.277, city: 'PENANG INTERNATIONAL', size: 0.04, type: 'city' }, // WMKP
    { lat: -9.303, lng: 125.287, city: 'COVALIMA', size: 0.04, type: 'city' }, // WPDB
    { lat: -8.485, lng: 126.399, city: 'CAKUNG', size: 0.04, type: 'city' }, // WPEC
    { lat: -3.442, lng: 114.761, city: 'SYAMSUDIN NOOR', size: 0.04, type: 'city' }, // WRBB
    { lat: -3.413, lng: 115.996, city: 'BATU LICIN', size: 0.04, type: 'city' }, // WRBC
    { lat: -2.705, lng: 111.673, city: 'ISKANDAR', size: 0.04, type: 'city' }, // WRBI
    { lat: -2.225, lng: 113.943, city: 'TJILIK RIWUT', size: 0.04, type: 'city' }, // WRBP
    { lat: -2.501, lng: 112.977, city: 'HASAN', size: 0.04, type: 'city' }, // WRBS
    { lat: -8.641, lng: 122.237, city: 'WAI OTI', size: 0.04, type: 'city' }, // WRKC
    { lat: -8.849, lng: 121.662, city: 'H HASAN AROEBOESMAN', size: 0.04, type: 'city' }, // WRKE
    { lat: -8.596, lng: 120.478, city: 'SATAR TACIK', size: 0.04, type: 'city' }, // WRKG
    { lat: -10.171, lng: 123.671, city: 'EL TARI', size: 0.04, type: 'city' }, // WRKK
    { lat: -8.486, lng: 119.889, city: 'MUTIARA II', size: 0.04, type: 'city' }, // WRKO
    { lat: 2.154, lng: 117.432, city: 'KALIMARU', size: 0.04, type: 'city' }, // WRLK
    { lat: -1.268, lng: 116.894, city: 'SEPINGGAN', size: 0.04, type: 'city' }, // WRLL
    { lat: 3.326, lng: 117.566, city: 'JUWATA', size: 0.04, type: 'city' }, // WRLR
    { lat: -0.484, lng: 117.157, city: 'TEMINDUNG', size: 0.04, type: 'city' }, // WRLS
    { lat: -0.093, lng: 117.439, city: 'TANJUNG SANTAN', size: 0.04, type: 'city' }, // WRLT
    { lat: -8.561, lng: 116.094, city: 'SELAPARANG', size: 0.04, type: 'city' }, // WRRA
    { lat: -8.539, lng: 118.687, city: 'MUHAMMAD SALAHUDDIN', size: 0.04, type: 'city' }, // WRRB
    { lat: -8.748, lng: 115.167, city: 'BALI INTERNATIONAL', size: 0.04, type: 'city' }, // WRRR
    { lat: -8.489, lng: 117.412, city: 'SUMBAWA BESAR', size: 0.04, type: 'city' }, // WRRS
    { lat: -9.409, lng: 119.246, city: 'TAMBOLAKA', size: 0.04, type: 'city' }, // WRRT
    { lat: -9.67, lng: 120.304, city: 'MAU HAU', size: 0.04, type: 'city' }, // WRRW
    { lat: -7.38, lng: 112.787, city: 'JUANDA', size: 0.04, type: 'city' }, // WRSJ
    { lat: -7.516, lng: 110.757, city: 'ADI SUMARMO WIRYOKUSUMO', size: 0.04, type: 'city' }, // WRSQ
    { lat: 1.424, lng: 103.811, city: 'SEMBAWANG', size: 0.04, type: 'city' }, // WSAG
    { lat: 1.36, lng: 103.909, city: 'PAYA LEBAR', size: 0.04, type: 'city' }, // WSAP
    { lat: 1.387, lng: 103.709, city: 'TENGAH', size: 0.04, type: 'city' }, // WSAT
    { lat: 1.417, lng: 103.867, city: 'SELETAR', size: 0.04, type: 'city' }, // WSSL
    { lat: 1.356, lng: 103.987, city: 'SINGAPORE CHANGI', size: 0.04, type: 'city' }, // WSSS
    { lat: -27.57, lng: 153.008, city: 'BRISBANE ARCHERFIELD', size: 0.04, type: 'city' }, // YBAF
    { lat: -10.951, lng: 142.459, city: 'BAMAGA INJINOO', size: 0.04, type: 'city' }, // YBAM
    { lat: -23.807, lng: 133.902, city: 'ALICE SPRINGS', size: 0.04, type: 'city' }, // YBAS
    { lat: -27.384, lng: 153.118, city: 'BRISBANE INTERNATIONAL', size: 0.04, type: 'city' }, // YBBN
    { lat: -28.164, lng: 153.505, city: 'GOLD COAST COOLANGATTA', size: 0.04, type: 'city' }, // YBCG
    { lat: -16.886, lng: 145.755, city: 'CAIRNS INTERNATIONAL', size: 0.04, type: 'city' }, // YBCS
    { lat: -26.413, lng: 146.262, city: 'CHARLEVILLE', size: 0.04, type: 'city' }, // YBCV
    { lat: -20.664, lng: 139.489, city: 'MOUNT ISA', size: 0.04, type: 'city' }, // YBMA
    { lat: -26.603, lng: 153.091, city: 'MAROOCHYDORE SUNSHINE COAST', size: 0.04, type: 'city' }, // YBMC
    { lat: -21.172, lng: 149.18, city: 'MACKAY', size: 0.04, type: 'city' }, // YBMK
    { lat: -27.411, lng: 151.735, city: 'OAKEY', size: 0.04, type: 'city' }, // YBOK
    { lat: -20.495, lng: 148.552, city: 'PROSERPINE WHITSUNDAY COAST', size: 0.04, type: 'city' }, // YBPN
    { lat: -23.382, lng: 150.475, city: 'ROCKHAMPTON', size: 0.04, type: 'city' }, // YBRK
    { lat: -19.253, lng: 146.765, city: 'TOWNSVILLE', size: 0.04, type: 'city' }, // YBTL
    { lat: -12.679, lng: 141.925, city: 'WEIPA', size: 0.04, type: 'city' }, // YBWP
    { lat: -38.039, lng: 144.469, city: 'AVALON', size: 0.04, type: 'city' }, // YMAV
    { lat: -36.068, lng: 146.958, city: 'ALBURY', size: 0.04, type: 'city' }, // YMAY
    { lat: -37.728, lng: 144.902, city: 'MELBOURNE ESSENDON', size: 0.04, type: 'city' }, // YMEN
    { lat: -38.099, lng: 147.149, city: 'EAST SALE', size: 0.04, type: 'city' }, // YMES
    { lat: -42.836, lng: 147.51, city: 'HOBART', size: 0.04, type: 'city' }, // YMHB
    { lat: -41.545, lng: 147.214, city: 'LAUNCESTON', size: 0.04, type: 'city' }, // YMLT
    { lat: -37.976, lng: 145.102, city: 'MELBOURNE MOORABBIN', size: 0.04, type: 'city' }, // YMMB
    { lat: -37.673, lng: 144.843, city: 'MELBOURNE INTERNATIONAL', size: 0.04, type: 'city' }, // YMML
    { lat: -37.932, lng: 144.753, city: 'POINT COOK', size: 0.04, type: 'city' }, // YMPC
    { lat: -34.945, lng: 138.531, city: 'ADELAIDE INTERNATIONAL', size: 0.04, type: 'city' }, // YPAD
    { lat: -32.507, lng: 137.717, city: 'PORT AUGUSTA', size: 0.04, type: 'city' }, // YPAG
    { lat: -34.703, lng: 138.621, city: 'EDINBURGH', size: 0.04, type: 'city' }, // YPED
    { lat: -32.097, lng: 115.881, city: 'PERTH JANDAKOT', size: 0.04, type: 'city' }, // YPJT
    { lat: -20.712, lng: 116.773, city: 'KARRATHA', size: 0.04, type: 'city' }, // YPKA
    { lat: -30.789, lng: 121.462, city: 'KALGOORLIE BOULDER', size: 0.04, type: 'city' }, // YPKG
    { lat: -15.778, lng: 128.707, city: 'KUNUNURRA', size: 0.04, type: 'city' }, // YPKU
    { lat: -22.236, lng: 114.089, city: 'LEARMONTH', size: 0.04, type: 'city' }, // YPLM
    { lat: -20.378, lng: 118.626, city: 'PORT HEDLAND INTERNATIONAL', size: 0.04, type: 'city' }, // YPPD
    { lat: -34.793, lng: 138.633, city: 'ADELAIDE PARAFIELD', size: 0.04, type: 'city' }, // YPPF
    { lat: -31.94, lng: 115.967, city: 'PERTH INTERNATIONAL', size: 0.04, type: 'city' }, // YPPH
    { lat: -31.144, lng: 136.817, city: 'WOOMERA', size: 0.04, type: 'city' }, // YPWR
    { lat: -10.451, lng: 105.69, city: 'CHRISTMAS ISLAND', size: 0.04, type: 'city' }, // YPXM
    { lat: -33.924, lng: 150.988, city: 'SYDNEY BANKSTOWN', size: 0.04, type: 'city' }, // YSBK
    { lat: -35.308, lng: 149.194, city: 'CANBERRA', size: 0.04, type: 'city' }, // YSCB
    { lat: -30.321, lng: 153.116, city: 'COFFS HARBOUR', size: 0.04, type: 'city' }, // YSCH
    { lat: -34.04, lng: 150.687, city: 'CAMDEN', size: 0.04, type: 'city' }, // YSCN
    { lat: -32.217, lng: 148.575, city: 'DUBBO', size: 0.04, type: 'city' }, // YSDU
    { lat: -29.041, lng: 167.939, city: 'NORFOLK ISLAND INTERNATIONAL', size: 0.04, type: 'city' }, // YSNF
    { lat: -33.601, lng: 150.781, city: 'RICHMOND', size: 0.04, type: 'city' }, // YSRI
    { lat: -33.946, lng: 151.177, city: 'KINGSFORD SMITH INTERNATIONAL AIRPORT', size: 0.04, type: 'city' }, // YSSY
    { lat: -31.084, lng: 150.847, city: 'TAMWORTH', size: 0.04, type: 'city' }, // YSTW
    { lat: -35.165, lng: 147.466, city: 'WAGGA WAGGA', size: 0.04, type: 'city' }, // YSWG
    { lat: 40.08, lng: 116.584, city: 'CAPITAL', size: 0.04, type: 'city' }, // ZBAA
    { lat: 40.853, lng: 111.822, city: 'BAITA', size: 0.04, type: 'city' }, // ZBHH
    { lat: 49.205, lng: 119.825, city: 'DONGSHAN', size: 0.04, type: 'city' }, // ZBLA
    { lat: 38.281, lng: 114.696, city: 'ZHENGDING', size: 0.04, type: 'city' }, // ZBSJ
    { lat: 39.124, lng: 117.346, city: 'BINHAI', size: 0.04, type: 'city' }, // ZBTJ
    { lat: 37.747, lng: 112.629, city: 'WUSU', size: 0.04, type: 'city' }, // ZBYN
    { lat: 23.184, lng: 113.266, city: 'BAIYUN', size: 0.04, type: 'city' }, // ZGGG
    { lat: 28.189, lng: 113.219, city: 'HUANGHUA', size: 0.04, type: 'city' }, // ZGHA
    { lat: 25.218, lng: 110.039, city: 'LIANGJIANG', size: 0.04, type: 'city' }, // ZGKL
    { lat: 22.608, lng: 108.172, city: 'WUXU', size: 0.04, type: 'city' }, // ZGNN
    { lat: 23.4, lng: 116.683, city: 'WAI SHA AIRPORT', size: 0.04, type: 'city' }, // ZGOW
    { lat: 22.639, lng: 113.812, city: 'BAOAN', size: 0.04, type: 'city' }, // ZGSZ
    { lat: 34.519, lng: 113.841, city: 'XINZHENG', size: 0.04, type: 'city' }, // ZHCC
    { lat: 30.784, lng: 114.208, city: 'TIANHE', size: 0.04, type: 'city' }, // ZHHH
    { lat: 30.552, lng: 111.469, city: 'YICHANG', size: 0.04, type: 'city' }, // ZHYC
    { lat: 39.033, lng: 125.783, city: 'PYONGYANG / SUNAN (CAPITAL) AIRPORT', size: 0.04, type: 'city' }, // ZKPY
    { lat: 36.517, lng: 103.622, city: 'ZHONGCHUAN', size: 0.04, type: 'city' }, // ZLLL
    { lat: 34.446, lng: 108.752, city: 'XIANYANG', size: 0.04, type: 'city' }, // ZLXY
    { lat: 47.843, lng: 106.766, city: 'BUYANT UKHAA', size: 0.04, type: 'city' }, // ZMUB
    { lat: 21.975, lng: 100.76, city: 'GASA', size: 0.04, type: 'city' }, // ZPJH
    { lat: 24.992, lng: 102.743, city: 'WUJIABA', size: 0.04, type: 'city' }, // ZPPP
    { lat: 24.544, lng: 118.127, city: 'GAOQI', size: 0.04, type: 'city' }, // ZSAM
    { lat: 28.6, lng: 115.917, city: 'NANCHANG AIRPORT', size: 0.04, type: 'city' }, // ZSCN
    { lat: 25.933, lng: 119.662, city: 'CHANGLE', size: 0.04, type: 'city' }, // ZSFZ
    { lat: 30.228, lng: 120.432, city: 'XIAOSHAN', size: 0.04, type: 'city' }, // ZSHC
    { lat: 29.825, lng: 121.465, city: 'LISHE', size: 0.04, type: 'city' }, // ZSNB
    { lat: 31.74, lng: 118.86, city: 'LU KOU AIRPORT', size: 0.04, type: 'city' }, // ZSNJ
    { lat: 31.78, lng: 117.298, city: 'LUOGANG', size: 0.04, type: 'city' }, // ZSOF
    { lat: 36.263, lng: 120.375, city: 'LIUTING', size: 0.04, type: 'city' }, // ZSQD
    { lat: 31.198, lng: 121.336, city: 'HONGQIAO INTERNATIONAL', size: 0.04, type: 'city' }, // ZSSS
    { lat: 37.402, lng: 121.372, city: 'LAISHAN', size: 0.04, type: 'city' }, // ZSYT
    { lat: 29.719, lng: 106.641, city: 'JIANGBEI', size: 0.04, type: 'city' }, // ZUCK
    { lat: 30.578, lng: 103.947, city: 'SHUANGLIU', size: 0.04, type: 'city' }, // ZUUU
    { lat: 27.989, lng: 102.184, city: 'QINGSHAN', size: 0.04, type: 'city' }, // ZUXC
    { lat: 39.543, lng: 76.022, city: 'KASHI', size: 0.04, type: 'city' }, // ZWSH
    { lat: 37.038, lng: 79.866, city: 'HOTAN', size: 0.04, type: 'city' }, // ZWTN
    { lat: 43.907, lng: 87.474, city: 'DIWOPU', size: 0.04, type: 'city' }, // ZWWW
    { lat: 45.623, lng: 126.25, city: 'TAIPING', size: 0.04, type: 'city' }, // ZYHB
    { lat: 46.843, lng: 130.465, city: 'JIAMUSI', size: 0.04, type: 'city' }, // ZYJM
    { lat: 44.524, lng: 129.569, city: 'HAILANG', size: 0.04, type: 'city' }, // ZYMD
    { lat: 38.966, lng: 121.538, city: 'ZHOUSHUIZI', size: 0.04, type: 'city' }, // ZYTL
    { lat: 42.882, lng: 129.448, city: 'YANJI', size: 0.04, type: 'city' }, // ZYYJ
];

export default locations;