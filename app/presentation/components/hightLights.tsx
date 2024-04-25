import * as React from 'react';
import {View} from 'react-native';
import {Divider, Layout, Text, useStyleSheet} from '@ui-kitten/components';
import t from '../../i18n/18n';
import themedStyles from '../styles';

const HightLights = () => {
    const styles = useStyleSheet(themedStyles);
    const listingDetail = [
        'Turnkey, Move-In-Ready Suites Featuring Sweeping Panoramic Views and Floor-to-Ceiling Glass Windows.',
        'Beautiful Common Areas to make great first impressions with your guests.',
        'CPLA is a boutique, three-story, courtyard-style building with street-level and secured covered parking.',
        'Centrally located near West LA’s main arterial roads and the 405 and 10 freeways, allowing for efficient commutes.'
    ]
    return (
        <Layout style={{marginLeft: 30, marginRight: 20, marginTop: 60, }}>
            <Text style={{fontSize: 14, lineHeight: 22, fontWeight: '700',}}>
                HIGHLIGHTS
            </Text>
            <Layout style={{marginTop: 6, marginBottom: 20}}>
                {listingDetail?.map((a, idx) => (
                    <View
                        key={idx}
                        style={[styles.row, {alignItems: 'center'}]}
                    >
                        <Text style={{color: 'brown', fontSize: 4, padding: 4 }}>{'\u2B24'}</Text>
                        <Text style={{fontSize: 14, textAlign: 'left', color: 'color-basic-600', padding: 10,}}>{a}</Text>
                    </View>
                ))}
            </Layout>
            <Divider />
        </Layout>
    );
};

export default HightLights;
