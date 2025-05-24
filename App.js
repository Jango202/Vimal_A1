import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, StatusBar } from 'react-native';

// Custom Components
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Good Evening</Text>
      <Text style={styles.headerSubtitle}>What do you want to hear?</Text>
    </View>
  );
};

const RecentlyPlayedCard = ({ title, artist, imageUri }) => {
  return (
    <View style={styles.recentCard}>
      <Image source={{ uri: imageUri }} style={styles.recentCardImage} />
      <View style={styles.recentCardText}>
        <Text style={styles.recentCardTitle}>{title}</Text>
        <Text style={styles.recentCardArtist}>{artist}</Text>
      </View>
    </View>
  );
};

const PlaylistCard = ({ title, description, imageUri }) => {
  return (
    <View style={styles.playlistCard}>
      <Image source={{ uri: imageUri }} style={styles.playlistImage} />
      <Text style={styles.playlistTitle}>{title}</Text>
      <Text style={styles.playlistDescription}>{description}</Text>
    </View>
  );
};

const FeaturedArtist = ({ name, imageUri }) => {
  return (
    <View style={styles.artistCard}>
      <Image source={{ uri: imageUri }} style={styles.artistImage} />
      <Text style={styles.artistName}>{name}</Text>
    </View>
  );
};

const QuickAccessItem = ({ title, imageUri }) => {
  return (
    <View style={styles.quickAccessItem}>
      <Image source={{ uri: imageUri }} style={styles.quickAccessImage} />
      <Text style={styles.quickAccessText}>{title}</Text>
    </View>
  );
};

const SectionHeader = ({ title }) => {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.seeAll}>See all</Text>
    </View>
  );
};

const App = () => {
  const recentlyPlayed = [
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', imageUri: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRMBh89h3Q0-XbKQpqrNna85joHhCiU7ux7tcJtK4v5j1nTZgzM7ruZXu8-G9CHqDCA8CM8ENLVn4rxlNE' },
    { id: 2, title: 'Watermelon Sugar', artist: 'Harry Styles', imageUri: 'https://www.rollingstone.com/wp-content/uploads/2019/08/20190723_Rolling_Stone_Harry_Styles_Rocks_0119_03_ext_RGB-LEAD-NEW.jpg?w=1600&h=900&crop=1' },
    { id: 3, title: 'Levitating', artist: 'Dua Lipa', imageUri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTUlyTFN60JmTruT2Y-ZKIoD_2M6bUPX3N6G1ROcALY-pyI-Ifw' },
    { id: 4, title: 'Good 4 U', artist: 'Olivia Rodrigo', imageUri: 'https://media.gq.com/photos/6101725d5a7aaf57765cff57/16:9/w_2240,c_limit/olivia-rodrigo-gq-september-2021-01.jpg' },
    { id: 5, title: 'Stay', artist: 'The Kid LAROI & Justin Bieber', imageUri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSqoSEuV0lmNrEVLwJ6q75DaOWQjorN0b2G_BLJr4OScCX0YSZ' },
    { id: 6, title: 'Industry Baby', artist: 'Lil Nas X & Jack Harlow', imageUri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR47t-lmIrlax5hCNxDpvDLFptkBFK8595alp9NS4ieFebsBlAbYMwe_tTYfkI6t20PQoQZrrGYaviR8gRVywr8Og' }
  ];

  const playlists = [
    { id: 1, title: 'Today\'s Top Hits', description: 'The most played songs right now', imageUri: 'https://i.ytimg.com/vi/xNV38nq1fqc/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGFkgZChlMA8=&rs=AOn4CLD9V1Xt2olALQ-E_XRr2Va4tOBMtA' },
    { id: 2, title: 'Chill Vibes', description: 'Relax and unwind with these tracks', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS00-AAhTqcJxeVI96wdD0IVy6cWeR8CVKmVQ&s' },
    { id: 3, title: 'Workout Mix', description: 'High energy songs for your workout', imageUri: 'https://www.shutterstock.com/image-photo/man-weightlifting-dumbbell-bodybuilder-athlete-260nw-2533244605.jpg' }
  ];

  const artists = [
    { id: 1, name: 'Taylor Swift', imageUri: 'https://naras.a.bigcontent.io/v1/static/Taylor-Swift-2024-GettyImages-2158634495' },
    { id: 2, name: 'Drake', imageUri: 'https://cdn.britannica.com/34/258834-050-9E9EF435/rapper-drake-performs-on-stage-during-lil-baby-and-friends-birthday-celebration-2022.jpg' },
    { id: 3, name: 'Billie Eilish', imageUri: 'https://www.rollingstone.com/wp-content/uploads/2022/07/billie-eilish-2022-cr-Mason-Poole-1800.jpg?w=1581&h=1054&crop=1' }
  ];

  const quickAccess = [
    { id: 1, title: 'Liked Songs', imageUri: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84e913f0317b78a75653c17e22' },
    { id: 2, title: 'Downloaded', imageUri: 'https://t4.ftcdn.net/jpg/01/06/47/61/360_F_106476142_zMZkkTkhMeq0DIjV20oJI00e3QXLYIGN.jpg' },
    { id: 3, title: 'Recently Played', imageUri: 'https://media-cdn.socastsrm.com/wordpress/wp-content/blogs.dir/3022/files/2022/06/musicpage-recplayed-1024x557-1.jpeg' },
    { id: 4, title: 'Made For You', imageUri: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Made_for_You_Jake_Owen.webp/316px-Made_for_You_Jake_Owen.webp.png' }
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Header />
        
        {/* Quick Access Section */}
        <View style={styles.quickAccessContainer}>
          {quickAccess.map((item) => (
            <QuickAccessItem 
              key={item.id}
              title={item.title}
              imageUri={item.imageUri}
            />
          ))}
        </View>

        {/* Recently Played Section */}
        <SectionHeader title="Recently Played" />
        <View style={styles.recentlyPlayedContainer}>
          {recentlyPlayed.map((song) => (
            <RecentlyPlayedCard
              key={song.id}
              title={song.title}
              artist={song.artist}
              imageUri={song.imageUri}
            />
          ))}
        </View>

        {/* Made For You Section */}
        <SectionHeader title="Made for You" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {playlists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              title={playlist.title}
              description={playlist.description}
              imageUri={playlist.imageUri}
            />
          ))}
        </ScrollView>

        {/* Featured Artists Section */}
        <SectionHeader title="Your Top Artists" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {artists.map((artist) => (
            <FeaturedArtist
              key={artist.id}
              name={artist.name}
              imageUri={artist.imageUri}
            />
          ))}
        </ScrollView>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollView: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#b3b3b3',
  },
  quickAccessContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 30,
  },
  quickAccessItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#282828',
    borderRadius: 8,
    padding: 10,
    flex: 1,
    minWidth: '45%',
  },
  quickAccessImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 12,
  },
  quickAccessText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  seeAll: {
    fontSize: 14,
    color: '#b3b3b3',
    fontWeight: '600',
  },
  recentlyPlayedContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
    gap: 8,
  },
  recentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#282828',
    borderRadius: 8,
    padding: 10,
  },
  recentCardImage: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginRight: 15,
  },
  recentCardText: {
    flex: 1,
  },
  recentCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
  recentCardArtist: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  horizontalScroll: {
    paddingLeft: 20,
    marginBottom: 30,
  },
  playlistCard: {
    marginRight: 15,
    width: 150,
  },
  playlistImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  playlistTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 5,
  },
  playlistDescription: {
    fontSize: 12,
    color: '#b3b3b3',
    lineHeight: 16,
  },
  artistCard: {
    alignItems: 'center',
    marginRight: 20,
  },
  artistImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  artistName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
  },
  bottomSpacing: {
    height: 100,
  },
});

export default App;