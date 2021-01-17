import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../../styles/styles.js'

export function Biomes({ navigation }){
  return (
    <View style={styles.container}>
        <LinearGradient
          colors={['#d7e7ff', '#E4E1FE' ]}
          style={styles.background}
        />

        <LinearGradient
          colors={['#FDFCFD', '#FDFCFD']}
          style={styles.name_biome}>
          <Text
            style={[styles.text, styles.name_biome_prompt]}
          >Name your biome:</Text>
          <LinearGradient
          colors={['#FDFCFD', '#FDFCFD']}
          style={styles.name_biome_text_box}>
            <Text
              style={[styles.text, styles.name_biome_fill]}
            >biome name</Text>
          </LinearGradient>
        </LinearGradient>

        <Text style={[styles.text, styles.category_chooser]}>Choose the category:</Text>

        <View style={{flex: 2, flexDirection: 'row'}}>
	        <View style={{flex: 3, flexDirection: 'column'}}>
		        <Image
		          style={styles.left_image}
		          source={require('../../assets/aquarium.png')}
		          resizeMode={'contain'}
		        />
		        <Text style={styles.left_text}>Aquarium</Text>
		    
		        <LinearGradient
		          colors={['#ee7861', '#ed9a62']}
		          style={[styles.category_button, styles.left_category_button]}>
		          <Text
		            style={[styles.text, styles.category_text]}
		           >Ok</Text>
		        </LinearGradient>
		    </View>



	        <View style={{flex: 3, flexDirection: 'column'}}>
	  			<Image
		          style={styles.right_image}
		          source={require('../../assets/biome.png')}
		          resizeMode={'contain'}
		        />
		    	<Text style={styles.right_text}>Garden</Text>
	        
		    	<LinearGradient
		          colors={['#ee7861', '#ed9a62']}
		          style={[styles.category_button, styles.right_category_button]}>
		          <Text
		            style={[styles.text, styles.category_text]}
		           >Cancel</Text>
		        </LinearGradient>
	        </View>
  		</View>

  </View>
  );
}