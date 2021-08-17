import React, { Component, createContext } from 'react';
import { Text, View, Dimensions, StyleSheet, TouuchableOpacity, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { MaterialIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

class PlaylistItem {
	constructor(name, uri, speaker) {
		this.name = name;
		this.speaker = speaker;
		this.uri = uri;
		//this.image = image;
	}
}

const PLAYLIST = [
	new PlaylistItem(
		'Morning Warmup',
		require('./tracks/MindfulRun10min.mp3'), // local audio file
        'Narrated by Elinor Fish'
	),
	new PlaylistItem(
		'Midday Break',
		'https://ia800304.us.archive.org/34/items/PaulWhitemanwithMildredBailey/PaulWhitemanwithMildredBailey-AllofMe.mp3',
        // remote audio file
	),
];

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

export const AudioContext = createContext();

export class AudioProvider extends Component {
	constructor(props) {
		super(props);
		this.index = 0;
		this.playback = null;
		this.state = {
			playbackPosition: null,
			playbackDuration: null,
			shouldPlay: false,
			isPlaying: false,
			isLoading: true,
			//portrait: null,
		};
	}

	componentDidMount() {
		Audio.setAudioModeAsync({
			allowsRecordingIOS: false,
			interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
			playsInSilentModeIOS: true,
			shouldDuckAndroid: true,
			interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            playThroughEarpieceAndroid: true,
		}); 

		this._loadNewPlayback(false);
	}

	async _loadNewPlayback(playing) {
/* 		if (this.playback != null) {
			await this.playback.unloadAsync();
			//this.playback.setOnPlaybackStatusUpdate(null);
			//this.playback = null;
		} */

		const source = PLAYLIST[this.index].uri; // for local files. {uri: audio.uri } for remote files
 		
        const initialStatus = {
			shouldPlay: playing,
		};
    
		const { sound, status } = await Audio.Sound.createAsync(
			source,
			initialStatus,
			this._onPlaybackStatusUpdate
		);
		this.playback = sound;

		this._updateScreenForLoading(false);
	}

	_updateScreenForLoading(isLoading) {
		if (isLoading) {
			this.setState({
				isPlaying: false,
				playbackDuration: null,
				playbackPosition: null,
				isLoading: true,
			});
		} 
        else {
			this.setState({
				playbackName: PLAYLIST[this.index].name,
                playbackSpeaker: PLAYLIST[this.index].speaker,
				//portrait: PLAYLIST[this.index].image,
				isLoading: false,
			});
		}
	}

	_onPlaybackStatusUpdate = status => {
		if (status.isLoaded) {
			this.setState({
				playbackPosition: status.positionMillis,
				playbackDuration: status.durationMillis,
				shouldPlay: status.shouldPlay,
				isPlaying: status.isPlaying,
			});
 		} 
		/* else {
			if (status.error) {
				console.log(`FATAL PLAYER ERROR: ${status.error}`);
			}
		}  */
	};

    _onPlayPausePressed = () => {
		if (this.playback != null) {
			if (this.state.isPlaying) {
				this.playback.pauseAsync();
			} else {
				this.playback.playAsync();
			}
		}
	};

    _onStopPressed = () => {
		if (this.playback != null) {
			this.playback.stopAsync();
		}
	};

	_getSeekSliderPosition() {
		if (
			this.playback != null &&
			this.state.playbackPosition != null &&
			this.state.playbackDuration != null
		) {
			return (
				this.state.playbackPosition /
				this.state.playbackDuration
			);
		}
		return 0;
	}

	_getMMSSFromMillis(millis) {
		const totalSeconds = millis / 1000;
		const seconds = Math.floor(totalSeconds % 60);
		const minutes = Math.floor(totalSeconds / 60);

		const padWithZero = number => {
			const string = number.toString();
			if (number < 10) {
				return '0' + string;
			}
			return string;
		};
		return padWithZero(minutes) + ':' + padWithZero(seconds);
	}

	_getTimestamp() {
		if (
			this.playback != null &&
			this.state.playbackPosition != null &&
			this.state.playbackDuration != null
		) {
			return `${this._getMMSSFromMillis(
				this.state.playbackPosition
			)} / ${this._getMMSSFromMillis(
				this.state.playbackDuration
			)}`;
		}
		return '';
	}


	render() {
/*         const {
            isPlaying
        } = this.state;
 */
		return (
			 <View style={styles.container}>

                  <View style={styles.playbackContainer}>
					<Slider
						style={styles.playbackSlider}
						value={this._getSeekSliderPosition()}
						minimumTrackTintColor="#4CCFF9"
                        maximumTrackTintColor="#000000"
						disabled={this.state.isLoading}
					/>
				</View>

				<View style={styles.detailsContainer}>
                {/* <Text style={[styles.text]}>
						{this.state.playbackName}
					</Text>
                    <Text style={[styles.text]}> 
                        {this.state.playbackSpeaker}
                     </Text> */}
				    <Text style={[styles.text]}>
						{this._getTimestamp()}
				    </Text> 
				</View>

				<View
					style={[
						styles.buttonsContainerBase,
                        styles.buttonsContainerTopRow
					]}
				>
					<TouchableOpacity
						style={styles.buttonsContainerBase}
						onPress={this._onPlayPausePressed}
						disabled={this.state.isLoading}
					>
						<View>
							{this.state.isPlaying ? (
								<MaterialIcons
									name="pause"
									size={65}
									color="#dd99ff"
								/>
							) : (
								<MaterialIcons
									name="play-arrow"
									size={65}
									color="#56D5FA"
								/>
							)}
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.buttonContainerBase}
						onPress={this._onStopPressed}
						disabled={this.state.isLoading}
					>
						<View>
							<MaterialIcons
								name="stop"
								size={65}
								color="#ff3333"
							/>
						</View>
					</TouchableOpacity>

				</View>

			</View>
 
            
        );
	}
}
{/* <AudioContext.Provider
                            
            value={{
                isPlaying
            }}    
    >

    </AudioContext.Provider> */}

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		//flexDirection: 'column',
        height: DEVICE_HEIGHT / 7,
		justifyContent: 'space-between',
		alignItems: 'center',
		//alignSelf: 'stretch',
    
	},
	portraitContainer: {
		marginTop: 80,
	},
	portrait: {
		height: 200,
		width: 200,
	},
	detailsContainer: {
		//height: 40,
		//marginTop: 20,
		alignItems: 'center',
	},
	playbackContainer: {
		flex: 1,
		//flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	playbackSlider: {
		alignSelf: 'stretch',
        width: DEVICE_WIDTH - 20,
        //height: DEVICE_HEIGHT / 5 ,
        padding: 10,
		marginLeft: 10,
		marginRight: 10,
	},
	text: {
		fontSize: 16,
		minHeight: 16,
	},
	buttonsContainerBase: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	buttonsContainerTopRow: {
		maxHeight: 40,
		minWidth: DEVICE_WIDTH / 2.0,
		maxWidth: DEVICE_WIDTH / 2.0,
	},

});

export default AudioProvider;