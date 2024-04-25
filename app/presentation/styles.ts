import {StyleService} from '@ui-kitten/components/theme';
import {Appearance} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const isDarkMode = Appearance.getColorScheme() === 'dark';

export default StyleService.create({
    container: {flex: 1, padding: 16},
    safeAreaView: {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1,
    },
    row: {flexDirection: 'row', justifyContent: 'flex-start'},
    input: {marginTop: 10},
    section: {marginTop: 20},
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    placard: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: 0,
        right: 0,
        height: 136,
        backgroundColor: 'background-basic-color-1',
        zIndex: 1000,
    },
    selected: {borderWidth: 3, borderColor: '#0088ff'},
    default: {borderWidth: 3, borderColor: 'rgba(0, 0, 0, 0)'},
    placardSilverImage: {width: 136, height: 136},
    placardGoldImage: {width: 186, height: 186},
    placardDiamondImage: {width: '100%', height: 230},
    sectionHeader: {fontSize: 14, lineHeight: 22, fontWeight: '700'},
    subSectionHeader: {fontSize: 15, lineHeight: 20},
    dataPoint: {fontSize: 12, lineHeight: 18},
    shadowBox: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    card: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    divider: {
        borderWidth: 2,
        borderColor: 'color-basic-500',
    },
    auctionDataPoint: {fontSize: 14, fontWeight: '600'},
    auctionDataPointLabel: {fontSize: 12, fontWeight: '300'},
});
