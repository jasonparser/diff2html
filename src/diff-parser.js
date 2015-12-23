(function() {
    INSERT_CHANGES: 'd2h-ins d2h-change',
    DELETE_CHANGES: 'd2h-del d2h-change',



    /* Diff */
    var oldMode = /^old mode (\d{6})/;
    var newMode = /^new mode (\d{6})/;
    var deletedFileMode = /^deleted file mode (\d{6})/;
    var newFileMode = /^new file mode (\d{6})/;

    var copyFrom = /^copy from (.+)/;
    var copyTo = /^copy to (.+)/;

    var renameFrom = /^rename from (.+)/;
    var renameTo = /^rename to (.+)/;

    var similarityIndex = /^similarity index (\d+)%/;
    var dissimilarityIndex = /^dissimilarity index (\d+)%/;
    var index = /^index ([0-9a-z]+)..([0-9a-z]+) (\d{6})?/;

    /* Combined Diff */
    var combinedIndex = /^index ([0-9a-z]+),([0-9a-z]+)..([0-9a-z]+)/;
    var combinedMode = /^mode (\d{6}),(\d{6})..(\d{6})/;
    var combinedNewFile = /^new file mode (\d{6})/;
    var combinedDeletedFile = /^deleted file mode (\d{6}),(\d{6})/;


    return language;
  module.exports.DiffParser = new DiffParser();
})();