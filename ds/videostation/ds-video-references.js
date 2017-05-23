var unknowHelp = 'Don\'t know what that does.<br/>If you know, including the input data, please send me.'; 
var unknownCalls = [
];

var vsReferences = {
	'Backdrop': {
		'addBackdrop': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'deleteAllBackdrop': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getBackdrop': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'updateDtvProgram': {
			'help': unknowHelp,
			'payload': {
			}
		},
	},
	'Collection': {
		'addVideoCollection': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'createCollection': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'createSmartCollection': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'deleteCollection': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'deleteVideoCollection': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'editCollection': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'editSmartCollection': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getInfoCollection': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listCollections': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listVideoCollections': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'searchCollection': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'videoListCollection': {
			'help': unknowHelp,
			'payload': {
			}
		},
	},
	'Controller': {
		'getControllerVolume': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listControllerDevices': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'pauseControllerPlayback': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'playControllerback': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'seekControllerPlayback': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'setControllerPassword': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'setControllerVolume': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'setRepeatControllerPlayback': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'statusControllerPlayback': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'stopControllerPlayback': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'testControllerPassword': {
			'help': unknowHelp,
			'payload': {
			}
		},
	},
	'Conversion': {
		'createOfflineConversion': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'deleteOfflineConversion': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listOfflineConversions': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'reStartAllOfflineConversion': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'restartOfflineConversion': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'stopAllOfflineConversion': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'stopOfflineConversion': {
			'help': unknowHelp,
			'payload': {
			}
		},
	},
	'Dtv': {
		'closeDtvStreaming': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'createDtvSchedule': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'createLnbDtvdvbsScan': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'createRepeatDtvSchedule': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'createSatelliteDtvdvbsScan': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'createUserdefineDtvSchedule': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'deleteAllDtvChannel': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'deleteDtvSchedule': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'deleteLnbDtvdvbsScan': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'deletePassedDtvSchedule': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'deleteRepeatDtvSchedule': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'deleteSatelliteDtvdvbsScan': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'deleteUserdefineDtvSchedule': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'editDtvChannel': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'editLnbDtvdvbsScan': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'editRepeatDtvSchedule': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'editSatelliteDtvdvbsScan': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'editTpDtvdvbsScan': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'editUserdefineDtvSchedule': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getCountRyDtvChannelScan': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getDefaultTpDtvdvbsScan': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getInfoDtvChannel': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getInfoDtvChannelScan': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getInfoDtvdvbsScan': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getInfoDtvStatistic': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getInfoDtvStreamController': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getInfoDtvTuner': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getInfoRepeatDtvSchedule': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getInfoUserdefineDtvSchedule': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getLnbDtvdvbsScan': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getRegionDtvChannelScan': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getSatelliteDtvdvbsScan': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getTpDtvdvbsScan': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listDtvChannels': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listDtvPrograms': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listDtvSchedules': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listDtvTuners': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'openDtvStreaming': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'searchDtvProgram': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'setStreamIngDtvStreamController': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'startDtvChannelScan': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'startDtvdvbsScan': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'statusDtvChannelScan': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'statusDtvdvbsScan': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'stopDtvChannelScan': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'stopDtvdvbsScan': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'stopDtvSchedule': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'stopStreamIngDtvStreamController': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'streamDtVing': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'streamDtVingNonAuth': {
			'help': unknowHelp,
			'payload': {
			}
		},
	},
	'File': {
		'deleteFile': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'deleteSymlinkFile': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'downloadFile': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getInfoFile': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getPlayBAckSetTingFile': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getTrAckInfoFile': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listFolders': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listSettingFolders': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'setPlayBAckSettingFile': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'setWatchstatusFile': {
			'help': unknowHelp,
			'payload': {
			}
		},
	},
	'Home Video': {
		'deleteHomeVideo': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'editHomeVideo': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getInfoHomeVideo': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listHomeVideos': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'searchHomeVideo': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'setRatingHomeVideo': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'setWatchedHomeVideo': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'timeLineHomeVideo': {
			'help': unknowHelp,
			'payload': {
			}
		},
	},
	'Library': {
		'listLibraries': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listLibraryAcrossLibraries': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'setVisibilityLibrary': {
			'help': unknowHelp,
			'payload': {
			}
		},
	},
	'Misc': {
		'getInfo': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getInfoWatchStatus': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listAudioTracks': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listMetadata': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'reSetTimeoutMisc': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'setInfoWatchStatus': {
			'help': unknowHelp,
			'payload': {
			}
		},
	},
	'Movie': {
		'deleteMovie': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'editMovie': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getInfoMovie': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listMovieAcrossLibraries': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listMovies': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'searchMovie': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'setRatingMovie': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'setWatchedMovie': {
			'help': unknowHelp,
			'payload': {
			}
		},
	},
	'Network': {
		'getPreferredInterfaceSettingNetwork': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listSettingNetworks': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'setPreferredInterfaceSettingNetwork': {
			'help': unknowHelp,
			'payload': {
			}
		},
	},
	'Parental control': {
		'deleteParentalControl': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getParentalControl': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listParentalControls': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listUserParentalControls': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'setParentalControl': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listCertificateParentalControls': {
			'help': unknowHelp,
			'payload': {
			}
		},
	},
	'Personal': {
		'getSettingPersonal': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'settingPersonal': {
			'help': unknowHelp,
			'payload': {
			}
		},
	},
	'Plugin Search': {
		'listPluginSearches': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'queryPluginSearch': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'startPluginSearch': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'stopPluginSearch': {
			'help': unknowHelp,
			'payload': {
			}
		},
	},
	'Poster': {
		'deleteImagePoster': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'deletePoster': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getImagePoster': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getPoster': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'setImagePoster': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'setPoster': {
			'help': unknowHelp,
			'payload': {
			}
		},
	},
	'PreAnalysis': {
		'getSettingPreAnalysis': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'settingPreAnalysis': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'triggerSettingPreAnalysis': {
			'help': unknowHelp,
			'payload': {
			}
		},
	},
	'Sharing': {
		'getSharing': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'setSharing': {
			'help': unknowHelp,
			'payload': {
			}
		},
	},
	'Streaming': {
		'closeStreaming': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'openStreaming': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'streaming': {
			'help': unknowHelp,
			'payload': {
			}
		},
	},
	'Subtitle': {
		'discoverSubtitle': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'downloadSubtitle': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getOffsetSubtitle': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getSubtitle': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listSubtitles': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'searchSubtitle': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'setOffsetSubtitle': {
			'help': unknowHelp,
			'payload': {
			}
		},
	},
	'Tv': {
		'deleteTvRecording': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'deleteTvShowEpisode': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'editAdvTvShowEpisode': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'editTvRecording': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'editTvShow': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'editTvShowEpisode': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getInfoTvRecording': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getInfoTvShow': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getInfoTvShowEpisode': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listChannelTvRecordings': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listProgramTvRecordings': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listTvRecordings': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listTvShowEpisodes': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'listTvShows': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'searchTvRecording': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'searchTvShow': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'searchTvShowEpisode': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'setRatingTvShowEpisode': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'setWatchedTvRecording': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'setWatchedTvShowEpisode': {
			'help': unknowHelp,
			'payload': {
			}
		},
	},
	'Video': {
		'deleteSymlinkVideo': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'deleteVideo': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'downloadVideo': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getInfoVideo': {
			'help': unknowHelp,
			'payload': {
			}
		},
		'getTrAckInfoVideo': {
			'help': unknowHelp,
			'payload': {
			}
		},
	},
};

unknownCalls.forEach(function(c) {
	dlReferences['Unknown'][c] = {'help': unknowHelp, 'payload': {}}
})

module.exports = vsReferences;
