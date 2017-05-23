var unknowHelp = 'Don\'t know what that does.<br/><br/>If you know, including the input data, please send me.';
var unknownCalls = [
	'getCover',
	'setLyrics',
	'setPasswordRemotePlayer',
	'testPasswordRemotePlayer',
	'removeMissingPlaylist',
	'saveSearchPlaylist',
	'deleteSonginfoProxy',
	'getSonginfoProxy',
	'getStreamIdProxy',
	'stream',
	'streamProxy',
	'transcodeStream'
];

var asReferences = {
	'Cover': {
		'getFolderCover': {
			'help': 'Retreive the image cover of a folder',
			'payload': {
				"id":"id of the folder"
			}
		},
		'getSongCover': {
			'help': 'Retreive the image cover of a song',
			'payload': {
				"id":"id of the song"
			}
		}
	},
	'Lyric': {
		'getLyrics': {
			'help': 'Retreive lyrics of a song',
			'payload': {
				"id":"id of the lyric (ex: http://lyrics.wikia.com/Aerosmith:Come_Together)",
				"plugin":"name of the lyrics plugin (ex: fujirou_lyric_wiki)"
			}
		},
		'searchLyricsLyricsSearch': {
			'help': 'Search lyrics of a song',
			'payload': {
				"title":"title of the song (required)",
				"artist":"name of the artist (required)"
			}
		}
	},
	'Misc': {
		'getInfo': {
			'help': 'Retreive infos on Audio Station',
			'payload': {}
		},
		'getInfoTag': {
			'help': 'Retreive infos on a tag',
			'payload': {
				"id":"id of the tag (required)"
			}
		},
		'listDefaultGenres': {
			'help': 'List all default genres',
			'payload': {
				"sort_by":"one of \"name\" or \"avg_rating\"",
				"sort_direction":"\"ASC\" for ascending ou \"DESC\" for descending"
			}
		},
		'listGenres': {
			'help': 'List all genres',
			'payload': {
				"limit":"max number of genres to retrieve",
				"offset":"offset number in the result",
				"sort_by":"one of \"name\" or \"avg_rating\"",
				"sort_direction":"\"ASC\" for ascending ou \"DESC\" for descending"
			}
		},
		'listMediaServers': {
			'help': 'List all media servers or a content of a media server',
			'payload': {
				"id":"id of the media server or id of the folder of the media server",
				"library":"one a \"personal\" or \"shared\"",
				"limit":"max number of media servers to retrieve",
				"offset":"offset number in the result",
				"sort_by":"\"title\"",
				"sort_direction":"\"ASC\" for ascending ou \"DESC\" for descending"
			}
		},
		'listTags': {
			'help': 'List all tags of an artist album',
			'payload': {
				"album_artist":"name of the album artist (required)",
				"album":"name of the artist (required)",
				"sort_by":"",
				"sort_direction":"\"ASC\" for ascending ou \"DESC\" for descending"
			}
		}
	},
	'Player': {
		'controlRemotePlayer': {
			'help': 'Control a remote player',
			'payload': {
				"id":"id of the remote player",
				"action":"one of \"play\", \"stop\", \"pause\", \"next\", \"prev\" or \"set_volume\"",
				"value":"used only with action \"set_volume\", value between 0 and 100"
			}
		},
		'getInfoRemotePlayer': {
			'help': 'Retreive infos of a remote player',
			'payload': {
				"id":"id of the remote player"
			}
		},
		'getPlayListRemotePlayer': {
			'help': 'Retreive the actual playlist of a remote player',
			'payload': {
				"id":"id of the remote player",
				"limit":"max number of songs to retrieve",
				"offset":"offset number in the result",
				"additional":"some of \"song_tag\", \"song_audio\", \"song_rating\""
			}
		},
		'getPlayListWebPlayer': {
			'help': 'Retreive the actual playlist of the web player',
			'payload': {
				"limit":"max number of songs to retrieve",
				"offset":"offset number in the result"
			}
		},
		'getStatusRemotePlayer': {
			'help': 'Retreive status on a remote player',
			'payload': {
				"id":"id of the remote player",
				"additional":"\"subplayer_volume\""
			}
		},
		'getStatusRemotePlayerStatus': {
			'help': 'Retreive status on a remote player',
			'payload': {
				"id":"id of the remote player",
				"additional":"some of \"song_tag\", \"song_audio\", \"subplayer_volume\""
			}
		},
		'listRemotePlayers': {
			'help': 'List all remote players',
			'payload': {
				"sort_by":"",
				"sort_direction":"\"ASC\" for ascending ou \"DESC\" for descending"
			}
		},
		'setMultipleRemotePlayer': {
			'help': 'Set remote player in the multiple mode',
			'payload': {
				"id":"id of the remote player",
				"subplayer_id":"???"
			}
		},
		'updatePlayListRemotePlayer': {
			'help': 'Update the playlist of a remote player',
			'payload': {
				"library":"one of \"personal\" or \"shared\" (default \"personal\")",
				"id":"id of the remote player",
				"limit":"max number of songs",
				"offset":"offset number in the result",
				"songs":"[] array of song's id",
				"containers_json":"[] array of {\"type\":\"folder\" or \"playlist\"\n\n\
\"folder\", \"id\":id of the folder, \"recursive\":true or false, \"sort_by\":\"song_rating\", \"sort_direction\":\"ASC\" for ascending ou \"DESC\" for descending}\n\n\
\"playlist\", \"id\":id of the playlist}"
			}
		},
		'updatePlayListWebPlayer': {
			'help': 'Update the playlist of the web player',
			'payload': {
				"library":"one of \"personal\" or \"shared\" (default \"personal\")",
				"limit":"max number of songs",
				"offset":"offset number in the result",
				"play":"true or false",
				"songs":"[] array of songs id",
				"containers_json":"[] array of {\"type\":\"folder\" or \"playlist\"\n\n\
\"folder\", \"id\":id of the folder, \"recursive\":true or false, \"sort_by\":\"song_rating\", \"sort_direction\":\"ASC\" for ascending ou \"DESC\" for descending}\n\n\
\"playlist\", \"id\":id of the playlist}"
			}
		}
	},
	'Playlist': {
		'copyTolibraryPlaylist': {
			'help': 'Copy to the personal or shared playlist',
			'payload': {
				"id":"id of the playlist (required)",
				"library":"one of \"personal\" or \"shared\" (default \"personal\")"
			}
		},
		'createPlaylist': {
			'help': 'Create a new playlist',
			'payload': {
				"name":"name of the playlist (required)",
				"library":"one of \"personal\" or \"shared\" (default \"personal\")",
				"songs":"[] array of song\'s id"
			}
		},
		'createSmartPlaylist': {
			'help': 'Create a new smart playlist',
			'payload': {
				"name":"name of the playlist (required)",
				"library":"one of \"personal\" or \"shared\" (default \"personal\")",
				"conj_rule":"one of \"or\" or \"and\". How are the rules considered them",
				"rules_json":"[] array of rules {\"tag\":one of 1, 2, 3, 4, 7, 9, 10, 11, 12, 13\n\n\
1  (Artist), \"op\":one of 1 (Is), 2 (Is not), 4 (Contains) or 8 (Not contains), \"tagval\":artist name, \"interval\":0}\n\n\
2  (Album), \"op\":one of 1 (Is), 2 (Is not), 4 (Contains) or 8 (Not contains), \"tagval\":album name, \"interval\":0}\n\n\
11 (Album/artist), \"op\":one of 1 (Is), 2 (Is not), 4 (Contains) or 8 (Not contains), \"tagval\":album/artist name, \"interval\":0}\n\n\
12 (Composer), \"op\":one of 1 (Is), 2 (Is not), 4 (Contains) or 8 (Not contains), \"tagval\":composer name, \"interval\":0}\n\n\
3  (Genre), \"op\":one of 1 (Is), 2 (Is not), 4 (Contains) or 8 (Not contains), \"tagval\":genre name, \"interval\":0}\n\n\
4  (Path of file), \"op\":one of 1 (Is), 2 (Is not), 4 (Contains) or 8 (Not contains), \"tagval\":path of file, \"interval\":0}\n\n\
7  (Year), \"op\":one of 64 (Is), 128 (Is not), 256 (More than) or 512 (Less than), \"tagval\":year, \"interval\":0}\n\n\
9  (Flow), \"op\":one of 64 (Is), 128 (Is not), 256 (More than) or 512 (Less than), \"tagval\":kbps, \"interval\":0}\n\n\
10 (Date added), \"op\": one of 16 (Is before), 32 (Is after), 1024 (Is in the last) or 2048 (Is not in the last), \"tagval\":date for op 16 and 32, or number of days, weeks, months for op 1024 and 2048, \"interval\":one of 1 (day), 2 (week) or 3 (month)}\n\n\
13 (Rating), \"op\":one of 64 (Is), 128 (Is not), 256 (More than) or 512 (Less than), \"tagval\":rating between 0 and 5, \"interval\":0}"
			}
		},
		'deletePlaylist': {
			'help': 'Delete a playlist',
			'payload': {
				"id":"id of the playlist"
			}
		},
		'editSharingPlaylist': {
			'help': 'Modify sharing infos of a playlist',
			'payload': {
				"id":"id of the playlist (required)",
				"enable_sharing":"true or false",
				"date_available":"date (yyyy-mm-dd) on which the share will be",
				"date_expired":"date (yyyy-mm-dd) on which the share will expire"
			}
		},
		'getInfoPlaylist': {
			'help': 'Retreive infos on a playlist',
			'payload': {
				"id":"id of the playlist"
			}
		},
		'listPlays': {
			'help': 'List all playlists',
			'payload': {
				"library":"one a \"personal\" or \"shared\"",
				"limit":"max number of playlists to retrieve",
				"offset":"offset number in the result",
				"sort_by":"",
				"sort_direction":"\"ASC\" for ascending ou \"DESC\" for descending"
			}
		},
		'renamePlaylist': {
			'help': 'Rename a playlist',
			'payload': {
				"id":"id of the playlist (required)",
				"new_name":"new name of the playlist (required)"
			}
		},
		'savePlayIngPlaylist': {
			'help': 'Save the playing playlist',
			'payload': {
				"id":"id of the player (required). Use \"__SYNO_WEB_PLAYER__\" for the Web Player",
				"name":"name of the playlist (required)",
				"library":"one of \"personal\" or \"shared\" (default \"personal\")",
			}
		},
		'updatesmartPlaylist': {
			'help': 'Update a smart playlist',
			'payload': {
				"id":"id of the smart playlist (required)",
				"new_name":"new name of the playlist",
				"library":"one of \"personal\" or \"shared\" (default \"personal\")",
				"conj_rule":"one of \"or\" or \"and\". How are the rules considered them",
				"rules_json":"[] array of rules {\"tag\":one of 1, 2, 3, 4, 7, 9, 10, 11, 12, 13\n\n\
1  (Artist), \"op\":one of 1 (Is), 2 (Is not), 4 (Contains) or 8 (Not contains), \"tagval\":artist name, \"interval\":0}\n\n\
2  (Album), \"op\":one of 1 (Is), 2 (Is not), 4 (Contains) or 8 (Not contains), \"tagval\":album name, \"interval\":0}\n\n\
11 (Album/artist), \"op\":one of 1 (Is), 2 (Is not), 4 (Contains) or 8 (Not contains), \"tagval\":album/artist name, \"interval\":0}\n\n\
12 (Composer), \"op\":one of 1 (Is), 2 (Is not), 4 (Contains) or 8 (Not contains), \"tagval\":composer name, \"interval\":0}\n\n\
3  (Genre), \"op\":one of 1 (Is), 2 (Is not), 4 (Contains) or 8 (Not contains), \"tagval\":genre name, \"interval\":0}\n\n\
4  (Path of file), \"op\":one of 1 (Is), 2 (Is not), 4 (Contains) or 8 (Not contains), \"tagval\":path of file, \"interval\":0}\n\n\
7  (Year), \"op\":one of 64 (Is), 128 (Is not), 256 (More than) or 512 (Less than), \"tagval\":year, \"interval\":0}\n\n\
9  (Flow), \"op\":one of 64 (Is), 128 (Is not), 256 (More than) or 512 (Less than), \"tagval\":kbps, \"interval\":0}\n\n\
10 (Date added), \"op\": one of 16 (Is before), 32 (Is after), 1024 (Is in the last) or 2048 (Is not in the last), \"tagval\":date for op 16 and 32, or number of days, weeks, months for op 1024 and 2048, \"interval\":one of 1 (day), 2 (week) or 3 (month)}\n\n\
13 (Rating), \"op\":one of 64 (Is), 128 (Is not), 256 (More than) or 512 (Less than), \"tagval\":rating between 0 and 5, \"interval\":0}"
			}
		},
		'updatesongsPlaylist': {
			'help': 'Update songs of a playlist',
			'payload': {
				"id":"id of the playlist (required)",
				"limit":"max number of songs",
				"offset":"offset number in the result",
				"songs":"[] array of song's id"
			}
		}
	},
	'Proxy': {
	},
	'Pin': {
		'pin': {
			'help': 'Pin items',
			'payload': {
				"items":"[] array of {\"type\":one of \"folder\", \"album\", \"artist\", \"composer\", \"genre\"\n\n\
\"folder\", \"criteria\":{\"folder\":id of the foler}, \"name\":name of the pin}\n\n\
\"album\", \"criteria\":{\"album\":name of the album, \"album_artist\":name of the album/artist}, \"name\":name of the pin}\n\n\
\"artist\", \"criteria\":{\"artist\":name of the artist},\"name\":name of the pin}\n\n\
\"composer\", \"criteria\":{\"composer\":name of the composer}, \"name\":name of the pin}\n\n\
\"genre\", \"criteria\":{\"genre\":name of the genre},\"name\":name of the pin}\n\n\
\"playlist\", \"criteria\":{\"playlist\":id of the playlist}, \"name\":name of the pin}"
			}
		},
		'listPins': {
			'help': 'List all pins',
			'payload': {
				"limit":"max number of pins to retrieve",
				"offset":"offset number in the result"
			}
		},
		'renamePin': {
			'help': 'Rename a pin',
			'payload': {
				"id":"id of the pin",
				"name":"new name of the pin"
			}
		},
		'reorderPin': {
			'help': 'Reorder pins',
			'payload': {
				"items":"[] array of pin's id in the desired order",
				"limit":"max number of pins to reorder",
				"offset":"offset number in the result",
			}
		},
		'unPin': {
			'help': 'Unpin items',
			'payload': {
				"items":"[] array of pin's id",
			}
		}
	},
	'Radio': {
		'addRadio': {
			'help': 'Add a radio',
			'payload': {
				"title":"name of the radio (required)",
				"desc":"description of the radio",
				"url":"url of the radio (required)",
				"container":"\"UserDefined\" or \"Favorite\" (required)"
			}
		},
		'listRadios': {
			'help': 'List all radios',
			'payload': {
				"limit":"max number of radios to retrieve",
				"offset":"offset number in the result",
				"sort_by":"",
				"sort_direction":"\"ASC\" for ascending ou \"DESC\" for descending"
			}
		},
		'searchRadio': {
			'help': 'Search for a radio',
			'payload': {
				"keyword":"name of the radio to search (required)",
				"limit":"max number of radio to retrieve",
				"offset":"offset number in the result",
				"sort_by":"",
				"sort_direction":"\"ASC\" for ascending ou \"DESC\" for descending"
			}
		},
		'updatesRadio': {
			'help': 'Update a block of radios. To update one radio, set limit to 1. To remove a radio leave radios_json to []. To update several radios, set limit to (last index of radio - first index of radio) and radios_json to an array with all infos of all radios between first and last index. If radios_json length is less than limit, missing radios are removed. If radios_json length is more than limit, additional radios are not considered',
			'payload': {
				"offset":"offset number to target the index of the radio (required)",
				"limit":"number of radio to update (required)",
				"radios_json":"[] array of the new infos of the radios {\"title\":new title,\"desc\":new desc,\"url\":new url}",
				"container":"\"UserDefined\" or \"Favorite\" (required)"
			}
		}
	},
	'Song': {
		'download': {
			'help': 'Download songs',
			'payload': {
				"songs":"[] array of song\'s id",
				"playlists_json":"[] array of {\"type\":\"playlist\", \"id\":id of the playlist}"
			}
		},
		'getInfoFolder': {
			'help': 'Retreive infos on a Folder',
			'payload': {
				"id":"id of the folder"
			}
		},
		'getInfoSong': {
			'help': 'Retreive infos on a song',
			'payload': {
				"id":"id of the song"
			}
		},
		'getSharingSong': {
			'help': 'Retreive the sharing state of a song',
			'payload': {
				"id":"id of the song (required)"
			}
		},
		'listAlbums': {
			'help': 'List all albums',
			'payload': {
				"artist":"name of the artist",
				"limit":"max number of albums to retrieve",
				"offset":"offset number in the result",
				"sort_by":"one of \"name\", \"display_artist\", \"year\" or \"time\"",
				"sort_direction":"\"ASC\" for ascending ou \"DESC\" for descending"
			}
		},
		'listArtists': {
			'help': 'List all artists',
			'payload': {
				"limit":"max number of artists to retrieve",
				"offset":"offset number in the result",
				"genre_filter":"\"genre\"",
				"sort_by":"one of \"name\" or \"avg_rating\"",
				"sort_direction":"\"ASC\" for ascending ou \"DESC\" for descending"
			}
		},
		'listComposers': {
			'help': 'List all composers',
			'payload': {
				"limit":"max number of composers to retrieve",
				"offset":"offset number in the result",
				"sort_by":"one of \"name\" or \"avg_rating\"",
				"sort_direction":"\"ASC\" for ascending ou \"DESC\" for descending"
			}
		},
		'listFolders': {
			'help': 'List all folders and music',
			'payload': {
			    "id":"id of the folder",
				"limit":"max number of folders to retrieve",
				"sort_by":"one of \"title\", \"album\", \"artist\", \"duration\", \"track\", \"song_rating\"",
				"sort_direction":"\"ASC\" for ascending ou \"DESC\" for descending"
			}
		},
		'listSearches': {
			'help': 'List all albums, artists, songs',
			'payload': {
				"keyword":"whatever to search",
				"limit":"max number of each albums, artists, songs to retrieve",
				"offset":"offset number in the result",
				"sort_by":"one of \"title\", \"album\" or \"artist\"",
				"sort_direction":"\"ASC\" for ascending ou \"DESC\" for descending"
			}
		},
		'listSongs': {
			'help': 'List all songs',
			'payload': {
				"limit":"max number of songs to retrieve",
				"offset":"offset number in the result",
				"additional":"Some of \"song_tag\", \"song_audio\", \"song_rating\"",
				"sort_by":"one of \"title\", \"album\", \"artist\", \"album_artist\", \"composer\", \"genre\", \"duration\", \"year\", \"disc\", \"track\", \"song_rating\" or \"random\"",
				"sort_direction":"\"ASC\" for ascending ou \"DESC\" for descending"
			}
		},
		'searchSong':{
			'help': 'Search for a song by title',
			'payload': {
				"title":"title to search",
				"limit":"max number of songs to retrieve",
				"offset":"offset number in the result"
			}
		},
		'setRatingSong': {
			'help': 'Set rate of a song',
			'payload': {
				"id":"id of the song (required)",
				"rating":"number between 0 and 5"
			}
		},
		'setSharingSong': {
			'help': 'Set sharing state of a song',
			'payload': {
				"id":"id of the song (required)",
				"enable_sharing":"true or false"
			}
		}
	},
	'Unknown': {}
};

unknownCalls.forEach(function(c) {
	asReferences['Unknown'][c] = {'help': unknowHelp, 'payload': {}}
})

module.exports = asReferences;